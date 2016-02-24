'use strict';

angular.module('app')
  .config (    ['$stateProvider', '$urlRouterProvider',
    function (   $stateProvider,   $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('catalog', {
          url: '/',
          abstract: true,
          views: {
            "": {
              templateUrl: 'catalog/catalog.html'
            }
          },
          resolve: {
            requireNoAuth: function($state, Auth) {
              return Auth.$requireAuth().then(function(auth) {
                $state.go('admin.dashboard');
              }, function(error) {
                return;
              });
            }
          }
        })
        .state('catalog.home', {
          url: '',
          views: {
            "header@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/header.html'
            },
            "carousel@catalog": {
              controller: 'CarouselCtrl as carouselCtrl',
              templateUrl: 'catalog/common/carousel.html'
            },
            "featured@catalog": {
              controller: 'CatalogFeaturedCtrl as catalogFeaturedCtrl',
              templateUrl: 'catalog/products/featured.html'
            },
            "footer@catalog": {
              templateUrl: 'catalog/common/footer.html'
            }
          }
        })
        .state('catalog.login', {
          url: 'login',
          views: {
            "header@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/header.html'
            },
            "main@catalog": {
              controller: 'AuthCtrl as authCtrl',
              templateUrl: 'catalog/account/login.html'
            },
            "footer@catalog": {
              templateUrl: 'catalog/common/footer.html'
            }
          }
        })
        .state('catalog.category', {
          url: 'category',
          params: {
            cid: null,
          },
          views: {
            "header@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/header.html'
            },
            "main@catalog": {
              controller: 'CatalogCategoryCtrl as catalogCategoryCtrl',
              templateUrl: 'catalog/products/category.html'
            },
            "footer@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/footer.html'
            }
          }
        })
        .state('catalog.subcategory', {
          url: 'subcategory',
          params: {
            subCid: null,
          },
          views: {
            "header@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/header.html'
            },
            "main@catalog": {
              controller: 'CatalogSubCategoryCtrl as catalogSubCategoryCtrl',
              templateUrl: 'catalog/products/subcategory.html'
            },
            "footer@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/footer.html'
            }
          }
        })
        .state('catalog.product', {
          url: 'product',
          params: {
            pid: null,
          },
          views: {
            "header@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/header.html'
            },
            "main@catalog": {
              controller: 'CatalogProductCtrl as catalogProductCtrl',
              templateUrl: 'catalog/products/product.html'
            },
            "footer@catalog": {
              controller: 'CatalogCtrl as catalogCtrl',
              templateUrl: 'catalog/common/footer.html'
            }
          }
        })
        .state('adminlogin', {
          url: '/adminlogin',
          controller: 'AuthCtrl as authCtrl',
          templateUrl: 'admin/auth/login.html'
        })
        .state('registertenant', {
          url: '/registertenant',
          controller: 'AuthCtrl as authCtrl',
          templateUrl: 'admin/register/registertenant.html'
        });
      }
  ])
