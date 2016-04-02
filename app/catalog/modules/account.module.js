'use strict';

angular.module('AccountModule', [
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngMessages',
  'firebase',
  'ui.bootstrap',
  'ui.router',
  'ui.select'

])

.config (    ['$stateProvider', '$urlRouterProvider',
    function ( $stateProvider,   $urlRouterProvider) {

        $urlRouterProvider.otherwise('/account');

        $stateProvider
            .state('account', {
                url: '/account',
                abstract: true,
                views: {
                    "": {
                        controller: 'AccountCtrl as accountCtrl',
                        templateUrl: 'catalog/views/account/account.html'
                    }
                },
                resolve: {
                    auth: function($state, Auth){
                        return Auth.$requireAuth().catch(function(){
                            $state.go('catalog.home');
                        });
                    },
                    profile: function(Profile, Auth){
                        return Auth.$requireAuth().then(function(auth){
                            return Profile.getProfile(auth.uid).$loaded();
                        });
                    }
                }
          })
          .state('account.detail', {
              url: '',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountAddressCtrl as accountAddressCtrl',
                      templateUrl: 'catalog/views/account/accountaddress.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  },
              }
          })
          .state('account.address', {
              url: 'accountaddress',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountAddressCtrl as accountAddressCtrl',
                      templateUrl: 'catalog/views/account/accountaddress.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
              }
          })
          .state('account.orders', {
              url: 'orders',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/orders.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
              }
          })
          .state('account.transactions', {
              url: 'security',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/transactions.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
              }
          })
          .state('account.rewardpoints', {
              url: 'security',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/rewardpoints.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
            }
          })
          .state('account.giftcard', {
              url: 'giftcard',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountGiftCardCtrl as accountGiftCardCtrl',
                      templateUrl: 'catalog/views/account/giftcard.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
              }
          })
          .state('account.password', {
              url: 'password',
              views: {
                  "accountHeader@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/header.html'
                  },
                  "accountNav@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/accountnav.html'
                  },
                  "accountDetail@account": {
                      controller: 'AccountCtrl as accountCtrl',
                      templateUrl: 'catalog/views/account/password.html'
                  },
                  "accountFooter@account": {
                      controller: 'CatalogCtrl as catalogCtrl',
                      templateUrl: 'catalog/views/common/footer.html'
                  }
              }
          })

      }

])

.factory('Account', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (      $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'countries');
          var countries = $firebaseArray(ref);

          var account = {

            allCountries: countries

          };

          return account;

      }

])

.factory('GiftCard', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (       $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'giftcards');

          var giftcard = {

              getGiftCard: function(theObj) {
                  return $firebaseArray(ref.child(tid).orderByChild("customer_email").equalTo(theObj.email));

              },

          };

          return giftcard;
      }

])

.controller('AccountCtrl', ['Auth', 'Customer', 'AlertService', '$state', 'profile', '$scope',
      function (             Auth,   Customer,   AlertService,   $state,   profile,   $scope) {

          var accountCtrl = this;
          accountCtrl.profile = profile;

          if (accountCtrl.profile.type === 'Customer') {
              accountCtrl.authInfo = Auth.$getAuth();
//              console.log($scope)
           } else {
              $state.go('catalog.home');
          }

          var theCustomer = Customer.getCustomer(accountCtrl.profile.cid);
              theCustomer.$loaded().then(function() {
                  accountCtrl.customer = theCustomer;
          });

          accountCtrl.forgotPassword = function() {
              Auth.$resetPassword({
                  email: accountCtrl.customer.customer_email
                  }).then(function() {
                      AlertService.addSuccess('Password Reset E-Mail Sent');
                      $state.go('catalog.home');
                  }).catch(function(error) {
                      console.error("Error: ", error);
                  });
          };

          accountCtrl.newPassword = function() {
            Auth.$changePassword({
                email: accountCtrl.customer.customer_email,
                oldPassword: accountCtrl.customer.customer_password,
                newPassword: accountCtrl.customer.customer_new_password
                }).then(function() {
                    AlertService.addSuccess('New Password Saved');
                    accountCtrl.customer.customer_password = null;
                    accountCtrl.customer.customer_new_password = null;
                    accountCtrl.customer.confirm_new_password = null;
                }).catch(function(error) {
                    console.error("Error: ", error);
                });
          };

          accountCtrl.logout = function() {
              Auth.$unauth();
              $state.go('catalog.home');
          };

      }

])

.controller('AccountAddressCtrl', ['Account',  'Countries', 'AlertService', 'Customer', 'tid', '$scope', 'profile',
      function (                    Account,    Countries,   AlertService,   Customer,   tid,   $scope,   profile) {
          var accountAddressCtrl = this;
          $scope.country = {};
          $scope.country.selected = {};
          accountAddressCtrl.profile = profile;
          $scope.countries = Countries.all;

          var theCustomer = Customer.getCustomer(accountAddressCtrl.profile.cid);
              theCustomer.$loaded().then(function() {
                  accountAddressCtrl.customer = theCustomer;
                  $scope.country.selected = accountAddressCtrl.customer.customer_country;
              });

      }

])

.controller('AccountGiftCardCtrl', ['Account',  'GiftCard', 'AlertService', 'Customer', 'tid', '$scope', 'profile',
      function (                     Account,    GiftCard,   AlertService,   Customer,   tid,   $scope,   profile) {
          var accountGiftCardCtrl = this;

          var theGiftCard = GiftCard.getGiftCard(profile);
              theGiftCard.$loaded().then(function() {

                accountGiftCardCtrl.gridGiftCards.data = theGiftCard;


          });

          accountGiftCardCtrl.gridGiftCards = {
              enableSorting: true,
              enableCellEditOnFocus: true,
              enableFiltering: true,
              columnDefs: [
                  { name:'giftCardCode', field: '$id', enableHiding: false, enableFiltering: false },
                  { name:'amount', field: 'giftcard_amount', width: '15%', enableHiding: false, enableFiltering: false,
                  cellClass: 'grid-align-right', cellFilter:'currency' },
                  { name:'status', field: 'giftcard_status', width: '15%', enableHiding: false, enableFiltering: true,
                  cellClass: 'grid-align-right' },
              ]
          };

      }

])
