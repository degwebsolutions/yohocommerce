'use strict';

angular.module('ExtensionsModule', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'firebase',
    'ui.bootstrap',
    'ui.router',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.cellNav',
    'ui.grid.selection'

])

.config(    ['$stateProvider', '$httpProvider',
    function( $stateProvider,   $httpProvider) {

      $stateProvider

          .state('admin.extensions', {
              url: '/extensions',
                  views: {
                    "header@admin": {
                        templateUrl: 'admin/views/extensions/extensions.header.html'
                    },
                    "main@admin": {
                        templateUrl: 'admin/views/extensions/extensions.html'
                    },
                    "list@admin.extensions": {
                        controller: 'ExtensionsCtrl as extensionsCtrl',
                        templateUrl: 'admin/views/extensions/modules.html'
                    }
                }
            })
            .state('admin.extensions.modules', {
                url: '/modules',
                views: {
                    "header@admin": {
                        templateUrl: 'admin/views/extensions/modules.header.html'
                    },
                    "main@admin": {
                        templateUrl: 'admin/views/extensions/extensions.html'
                    },
                    "list@admin.extensions.modules": {
                        controller: 'ExtensionsCtrl as extensionsCtrl',
                        templateUrl: 'admin/views/extensions/modules.html'
                    }
                }
            })
            .state('admin.extensions.shipping', {
                url: '/shipping',
                views: {
                    "header@admin": {
                        templateUrl: 'admin/views/extensions/shipping.header.html'
                    },
                    "main@admin": {
                        templateUrl: 'admin/views/extensions/extensions.html'
                    },
                    "list@admin.extensions.shipping": {
                        controller: 'ExtensionsCtrl as extensionsCtrl',
                        templateUrl: 'admin/views/extensions/shipping.html'
                    }
                }
            })
            .state('admin.extensions.payment', {
                url: '/payment',
                views: {
                    "header@admin": {
                        templateUrl: 'admin/views/extensions/payment.header.html'
                    },
                    "main@admin": {
                        templateUrl: 'admin/views/extensions/extensions.html'
                    },
                    "list@admin.extensions.payment": {
                        controller: 'ExtensionsCtrl as extensionsCtrl',
                        templateUrl: 'admin/views/extensions/payment.html'
                    }
                }
            })
            .state('admin.extensions.feeds', {
                url: '/feeds',
                views: {
                    "header@admin": {
                        templateUrl: 'admin/views/extensions/feeds.header.html'
                    },
                    "main@admin": {
                        templateUrl: 'admin/views/extensions/extensions.html'
                    },
                    "list@admin.extensions.feeds": {
                        controller: 'ExtensionsCtrl as extensionsCtrl',
                        templateUrl: 'admin/views/extensions/feeds.html'
                    }
                }
            })

      }

])

.factory('ShippingOptions', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (            $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'shipping_options');
          var shippingoptions = $firebaseArray(ref.child(tid));

          var shippingoption = {

              addShippingOption: function(theObj) {
                  var theRef = new Firebase(FirebaseUrl+'shipping_options/'+tid);
                  return theRef.push(theObj);
              },

              removeShippingOption: function(theId) {
                  var theRef = new Firebase(FirebaseUrl+'shipping_options/'+tid+'/'+theId);
                  return theRef.remove();
              },

              all: shippingoptions,

          };

          return shippingoption;

      }

])

.controller('ExtensionsCtrl', ['ShippingOptions', '$state', '$scope', '$stateParams',
      function (                ShippingOptions,   $state,   $scope,   $stateParams) {
          var extensionsCtrl = this;

          extensionsCtrl.gridModules = {
              showGridFooter: true,
              enableSorting: true,
              enableCellEditOnFocus: true,
              enableFiltering: true,
          //    data: Modules.all,
              columnDefs: [
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/editModule.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Edit', enableCellEdit: false, enableCellEdit: false, enableFiltering: false },
                  { name:'moduleName', field: 'module_name', enableHiding: false, enableFiltering: false, enableCellEdit: false, width: '50%' },
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/installModule.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Install', enableCellEdit: false, enableCellEdit: false, enableFiltering: false }

              ]
          };

          extensionsCtrl.addShippingOption = function() {
                ShippingOptions.addShippingOption(extensionsCtrl.shipping_option);
                extensionsCtrl.shipping_option.shipping_name = null;
                extensionsCtrl.shipping_option.shipping_cost = null;
          }, function(error) {
                extensionsCtrl.error = error;
          };

          extensionsCtrl.removeShippingOption = function(row) {
                ShippingOptions.removeShippingOption(row.entity.$id);
          }, function(error) {
                extensionsCtrl.error = error;
          };

          extensionsCtrl.gridShipping = {
                enableSorting: true,
                enableCellEditOnFocus: true,
                data: ShippingOptions.all,
                columnDefs: [
                      { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/editShipper.html',
                        width: 35, enableColumnMenu: false, headerTooltip: 'Edit', enableCellEdit: false, enableCellEdit: false, enableFiltering: false },
                      { name:'ShippingMethod', field: 'shipping_name', enableHiding: false },
                      { name:'ShippingCost', field: 'shipping_cost', type: 'number', cellClass: 'grid-align-right', cellFilter: 'currency',enableHiding: false },
                      { name: ' ', field: '$id', cellTemplate:'admin/views/extensions/gridTemplates/removeShippingOption.html',
                        width: 35, enableCellEdit: false, enableColumnMenu: false }
                ]
          };

          extensionsCtrl.gridPayment = {
              showGridFooter: true,
              enableSorting: true,
              enableCellEditOnFocus: true,
              enableFiltering: true,
          //    data: Payments.all,
              columnDefs: [
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/editShipper.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Edit', enableCellEdit: false, enableCellEdit: false, enableFiltering: false },
                  { name:'paymentMethod', field: 'payment_name', enableHiding: false, enableFiltering: false, enableCellEdit: false, width: '73%' },
                  { name:'paymentStatus', field: 'shipping_status', enableHiding: false, enableFiltering: false, enableCellEdit: false, width: '20%' },
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/installShipper.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Install', enableCellEdit: false, enableCellEdit: false, enableFiltering: false }

              ]
          };

          extensionsCtrl.gridFeeds = {
              showGridFooter: true,
              enableSorting: true,
              enableCellEditOnFocus: true,
              enableFiltering: true,
          //    data: Payments.all,
              columnDefs: [
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/editFeed.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Edit', enableCellEdit: false, enableCellEdit: false, enableFiltering: false },
                  { name:'feedName', field: 'feed_name', enableHiding: false, enableFiltering: false, enableCellEdit: false, width: '73%' },
                  { name:'feedStatus', field: 'feed_status', enableHiding: false, enableFiltering: false, enableCellEdit: false, width: '20%' },
                  { name: '', field: '$id', shown: false, cellTemplate: 'admin/views/extensions/gridTemplates/installFeed.html',
                    width: 35, enableColumnMenu: false, headerTooltip: 'Install', enableCellEdit: false, enableCellEdit: false, enableFiltering: false }

              ]
          };

      }

])
