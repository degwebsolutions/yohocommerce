'use strict';

angular.module('CatalogModule', [
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

.constant('sid', '-KCvkHlN5w6PS9QTgR4R')

.config (       ['$stateProvider', '$urlRouterProvider',
    function (    $stateProvider,   $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('catalog', {
                url: '/',
                abstract: true,
                views: {
                    "": {
                        templateUrl: 'catalog/views/catalog.html'
                    }
                }
            })
            .state('catalog.home', {
                url: '',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "carousel@catalog": {
                        controller: 'CarouselCtrl as carouselCtrl',
                        templateUrl: 'catalog/views/common/carousel.html'
                    },
                    "featured@catalog": {
                        controller: 'CatalogFeaturedCtrl as catalogFeaturedCtrl',
                        templateUrl: 'catalog/views/products/featured.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
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
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CatalogCategoryCtrl as catalogCategoryCtrl',
                        templateUrl: 'catalog/views/products/category.html'
                    },
                    "footer@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/footer.html'
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
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CatalogSubCategoryCtrl as catalogSubCategoryCtrl',
                        templateUrl: 'catalog/views/products/subcategory.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
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
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CatalogProductCtrl as catalogProductCtrl',
                        templateUrl: 'catalog/views/products/product.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('catalog.cart', {
                url: 'cart',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CartCtrl as cartCtrl',
                        templateUrl: 'catalog/views/shoppingcart/cart.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('catalog.checkout', {
                url: 'checkout',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CheckoutCtrl as checkoutCtrl',
                        templateUrl: 'catalog/views/shoppingcart/checkout.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('catalog.contact', {
                url: 'contact',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/contact.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('catalog.login', {
                url: 'login',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'AuthCtrl as authCtrl',
                        templateUrl: 'catalog/views/account/login.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('catalog.register', {
                url: 'register',
                views: {
                    "header@catalog": {
                        controller: 'CatalogCtrl as catalogCtrl',
                        templateUrl: 'catalog/views/common/header.html'
                    },
                    "main@catalog": {
                        controller: 'RegisterCtrl as registerCtrl',
                        templateUrl: 'catalog/views/account/register.html'
                    },
                    "footer@catalog": {
                        templateUrl: 'catalog/views/common/footer.html'
                    }
                }
            })
            .state('adminlogin', {
                url: '/adminlogin',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'catalog/views/admin/adminlogin.html'
            })
            .state('registertenant', {
                url: '/registertenant',
                controller: 'AuthCtrl as authCtrl',
                templateUrl: 'catalog/views/admin/registertenant.html'
            })

      }
])

.factory('Catalog', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid', 'sid',
      function (      $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid,   sid) {
          var ref = new Firebase(FirebaseUrl+'categories');
          var categories = $firebaseArray(ref.child(tid).orderByPriority());

          var subRef = new Firebase(FirebaseUrl+'sub_categories');
          var subCategories = $firebaseArray(subRef.child(tid).orderByChild('category_id'));
          var pulldownCategories = $firebaseArray(subRef.child(tid).orderByChild('category_id'));

          var storeRef = new Firebase(FirebaseUrl+'stores');
          var storeDefaults = $firebaseObject(storeRef.child(tid).child(sid));

          var catalog = {

              all: categories,

              pulldown: pulldownCategories,

              allMenus: subCategories,

              storeDefaults: storeDefaults

          };

          return catalog;

      }

])

.factory('Profile', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (      $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'profiles');
          var profiles = $firebaseArray(ref);

          var profile = {

              getProfile: function(uid) {
                  return $firebaseObject(ref.child(uid));
              },

              getGravatar: function(uid) {
                  return '//www.gravatar.com/avatar/' + profiles.$getRecord(uid).emailHash;
              },

              all: profiles

          };

          return profile;

      }

])

.factory('Auth', ['$firebaseAuth', 'FirebaseUrl',
      function (   $firebaseAuth,   FirebaseUrl) {
          var ref = new Firebase(FirebaseUrl);
          var auth = $firebaseAuth(ref);

          return auth;

      }

])

.factory('Register', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (       $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'countries');
          var countries = $firebaseArray(ref);

            var register = {

              allCountries: countries

            };

            return register;

      }

])

.factory('CartOrders', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (         $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'orders');
          var cartorders = $firebaseArray(ref.child(tid));

          var cartorder = {

              addOrder: function() {
                  return cartorders.$add({ status: 'cart', items: 0, total: 0, create_date: Firebase.ServerValue.TIMESTAMP }).then(function(theRef) {
                      return theRef.key();
                  });
              },

              getOrder: function(oid) {
                  return $firebaseObject(ref.child(tid).child(oid));
              },

              updateHeader: function(theObj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+theObj.oid);
                  return theRef.update( {items: theObj.items, total: theObj.total} );
              },

              addLine: function(theObj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+theObj.oid+'/lines');
                  theRef.push( {product_id: theObj.$id, product_name: theObj.product_name, regular_price: theObj.product_price,
                      line_quantity: theObj.product_qty, special_price: theObj.special_price, product_image: theObj.product_image,
                      line_total: theObj.line_total} );
              },

              removeLine: function(theObj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+theObj.oid+'/lines/'+theObj.lid);
                  return theRef.remove();
              },

              getLines: function(oid) {
                  return $firebaseArray(ref.child(tid).child(oid).child('/lines'));
              },

              updateLineQty: function(theObj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+theObj.oid+'/lines/'+theObj.lid);
                  theRef.update( {line_quantity: theObj.qty} );

              },

              all: cartorders

          };

          return cartorder;

      }

])

.factory('Countries', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl',
      function (        $firebaseArray,   $firebaseObject,   FirebaseUrl) {
            var ref = new Firebase(FirebaseUrl+'countries');
            var countries = $firebaseArray(ref);

            var country = {
              all: countries
            };

            return country;

      }

])

.service('LoginHelper', ['$http', '$q', '$cookies', '$rootScope', 'InstanceUrl',
      function (          $http,   $q,   $cookies,   $rootScope,   InstanceUrl) {
    		      this.initiate = function (options) {
    			    var deferred = $q.defer();

            			$http.post(InstanceUrl+'api/v2/user/session/', options).then(function (result) {
              				$http.defaults.headers.common['X-DreamFactory-Session-Token'] = result.data.session_token;
              				$cookies.session_token = result.data.session_token;

              				$rootScope.user = result.data;

              				try {
              				      window.localStorage.user = JSON.stringify(result.data);
              				} catch (e) { }

             		      deferred.resolve();
            			}, deferred.reject);

            			return deferred.promise;
        		};
	     }
])


.service('CartAddOrder', ['Catalog', 'CartOrders', 'Products', '$cookies',
      function (           Catalog,   CartOrders,   Products,   $cookies) {
    		    this.initiate = function (pid) {

                  var theHeader = CartOrders.getOrder($cookies.get('orderId'));
                      theHeader.$loaded().then(function() {
                            theHeader.items = theHeader.items + 1;
                            theHeader.oid = $cookies.get('orderId');

                            var theProduct = Products.getProduct(pid);
                                  theProduct.$loaded().then(function() {
                                        theProduct.oid = $cookies.get('orderId');
                                        theProduct.product_qty = 1;

                                        if (theProduct.special_price === undefined) {
                                              theProduct.special_price = null;
                                              theProduct.line_total = theProduct.product_price;
                                              theHeader.total = theHeader.total + theProduct.product_price;
                                        } else {
                                              theProduct.line_total = theProduct.special_price;
                                              theHeader.total = theHeader.total + theProduct.special_price;
                                        }

                                        CartOrders.updateHeader(theHeader);
                                        CartOrders.addLine(theProduct);
                                  });

                      });

            };

      }

])

.service('CartUpdateHeader', ['CartOrders',
        function (             CartOrders) {
      		      this.initiate = function (oid) {

                    var theHeader = {};
                    var theLine = {};
                    theHeader.oid = oid;
                    theHeader.items = 0;
                    theHeader.total = 0;

                    var theLines = CartOrders.getLines(oid);
                          theLines.$loaded().then(function() {

                              for(var i = 0; i < theLines.length; i++) {
                                  theLine.qty = theLines[i].line_quantity;

                                  if (theLines[i].special_price === undefined)
                                      theLine.price = theLines[i].regular_price;
                                  else
                                      theLine.price = theLines[i].special_price;

                                  theHeader.items = theHeader.items + theLine.qty;
                                  theHeader.total = theHeader.total + (theLine.qty * theLine.price);

                              }

                              CartOrders.updateHeader(theHeader);

                        });

                };

        }

])

.service('CartUpdateQty', ['CartOrders', 'CartUpdateHeader', '$cookies',
      function (            CartOrders,   CartUpdateHeader,   $cookies) {
    		      this.initiate = function (lid, qty) {
                    var oid = $cookies.get('orderId');
                    var theLine = {};
                    theLine.qty = Number(qty);
                    theLine.oid = oid;
                    theLine.lid = lid;
                    CartOrders.updateLineQty(theLine);
                    CartUpdateHeader.initiate(oid);
            };

      }

])

.service('CartRemoveLine', ['CartOrders', 'CartUpdateHeader', '$cookies',
        function (           CartOrders,   CartUpdateHeader,   $cookies) {
      		      this.initiate = function (lid) {
                      var oid = $cookies.get('orderId');
                      var theLine = {};
                      theLine.lid = lid;
                      theLine.oid = oid;
                      CartOrders.removeLine(theLine);
                      CartUpdateHeader.initiate(oid);
                };

        }

])

.controller('CatalogCtrl', ['Catalog', 'CartOrders', 'Products', 'CartUpdateQty', 'CartRemoveLine', '$scope', '$state', '$cookies',
      function (             Catalog,   CartOrders,   Products,   CartUpdateQty,   CartRemoveLine,   $scope,   $state,   $cookies) {
            var catalogCtrl = this;
            $scope.product = {};
            catalogCtrl.categories = Catalog.all;
            catalogCtrl.store = Catalog.storeDefaults;
            catalogCtrl.subPulldowns = Catalog.pulldown;
            catalogCtrl.subCategories = Catalog.allMenus;

            catalogCtrl.addOrder = function() {
                  CartOrders.addOrder().then(function(theRef) {
                        $cookies.put("orderId", theRef);
                        catalogCtrl.getTotal();
                  });
            }, function(error) {
                  catalogCtrl.error = error;
            };

            catalogCtrl.getTotal = function() {
                  var orderTotal = CartOrders.getOrder($cookies.get('orderId'));
                      orderTotal.$loaded().then(function() {
                          catalogCtrl.orderTotal = orderTotal;
                      });
            }, function(error) {
                  catalogCtrl.error = error;
            };

            if ($cookies.get('orderId') === undefined)
                  catalogCtrl.addOrder();
            else
                catalogCtrl.getTotal();

            catalogCtrl.getOrder = function() {
                var theOrder = CartOrders.getLines($cookies.get('orderId'))
                    theOrder.$loaded().then(function() {
                        catalogCtrl.order = theOrder;
                    });
            }, function(error) {
                    catalogCtrl.error = error;
            };

            catalogCtrl.updateQty = function(lid, qty) {
                  if (qty > 0 )
                        CartUpdateQty.initiate(lid, qty);
                  if (qty === "0")
                        CartRemoveLine.initiate(lid);

            }, function(error) {
                  catalogCtrl.error = error;
            };

            catalogCtrl.removeLine = function(lid) {
                  CartRemoveLine.initiate(lid);
            }, function(error) {
                  catalogCtrl.error = error;
            };

            catalogCtrl.goCategory = function(cid) {
                  $state.go('catalog.category', {'cid': cid});
            };

            catalogCtrl.goSubCategory = function(subCid) {
                  $state.go('catalog.subcategory', {'subCid': subCid});
            };

            catalogCtrl.goProduct = function(pid) {
                  $state.go('catalog.product', {'pid': pid});
            };

            catalogCtrl.findProduct = function() {
                  $state.go('catalog.product', {'pid': $scope.product.selected.$id});
            };

      }

])


.controller('CarouselCtrl', ['Banner',
      function (              Banner) {
          var carouselCtrl = this;

          carouselCtrl.myInterval = 7000;
          carouselCtrl.noWrapSlides = false;

          carouselCtrl.defaultSlides = [
              { image: "/images/carousel-default-image.png" },
              { image: "/images/carousel-default-image.png" },
              { image: "/images/carousel-default-image.png" }
          ]
          /* removed until file upload working
              carouselCtrl.bannerImages = Banner.getImages("1");
                carouselCtrl.bannerImages.$loaded().then(function() {
                  if (carouselCtrl.bannerImages.length === 0) {
                    carouselCtrl.bannerArray = 'no';

                  }
              });
          */
      }

])

.controller('CatalogCategoryCtrl', ['Products', 'Categories', 'CartAddOrder', '$state', '$stateParams',
      function (                     Products,   Categories,   CartAddOrder,   $state,   $stateParams) {
            var catalogCategoryCtrl = this;
            var cid = $stateParams.cid

            if (cid === null) {
                  $state.go('catalog.home');
            } else {
                  var category = Categories.getCategory(cid);
                      category.$loaded().then(function() {
                          catalogCategoryCtrl.category = category;
                          var products = Products.getProductCategory(cid);
                              products.$loaded().then(function() {
                                catalogCategoryCtrl.products = products;
                          });
                  });
            }

            catalogCategoryCtrl.goProduct = function(pid) {
                $state.go('catalog.product', {'pid': pid});
            };

            catalogCategoryCtrl.addOrder = function(pid) {
                CartAddOrder.initiate(pid);
            };

      }

])

.controller('CatalogFeaturedCtrl', ['CartAddOrder', 'Products', '$state',
      function (                     CartAddOrder,   Products,   $state) {
            var catalogFeaturedCtrl = this;
            catalogFeaturedCtrl.featuredProducts = Products.allFeatured;

            catalogFeaturedCtrl.goProduct = function(pid) {
                $state.go('catalog.product', {'pid': pid});
            };

            catalogFeaturedCtrl.addOrder = function(pid) {
                CartAddOrder.initiate(pid);
            };

      }

])

.controller('CatalogProductCtrl', ['$state', 'Product', 'CartAddOrder', '$stateParams',
      function (                    $state,   Product,   CartAddOrder,   $stateParams) {
            var catalogProductCtrl = this;

            var pid = $stateParams.pid

            if (pid === null) {
                $state.go('catalog.home');
            } else {
                var product = Product.getProduct(pid);
                    product.$loaded().then(function() {
                      catalogProductCtrl.product = product;
                });
                var thumbnails = Product.getProductThumbnails(pid);
                    thumbnails.$loaded().then(function() {
                      catalogProductCtrl.thumbnails = thumbnails;
                });
            }

            catalogProductCtrl.goCategory = function(cid) {
                $state.go('catalog.category', {'cid': cid});
            };

            catalogProductCtrl.addOrder = function(pid) {
                CartAddOrder.initiate(pid);
            };

      }

])

.controller('CatalogSubCategoryCtrl', ['CartAddOrder', 'Products', 'SubCategories', 'Categories', '$state', '$stateParams',
      function (                        CartAddOrder,   Products,   SubCategories,   Categories,   $state,   $stateParams) {
            var catalogSubCategoryCtrl = this;
            var subCid = $stateParams.subCid;

            catalogSubCategoryCtrl.goCategory = function(cid) {
                $state.go('catalog.category', {'cid': cid});
            };

            catalogSubCategoryCtrl.goProduct = function(pid) {
                $state.go('catalog.product', {'pid': pid});
            };

            if (subCid === null) {
                $state.go('catalog.home');
            } else {
                var subCategory = SubCategories.getSubCategory(subCid);
                    subCategory.$loaded().then(function() {
                        catalogSubCategoryCtrl.subCategory = subCategory;
                          var category = Categories.getCategory(catalogSubCategoryCtrl.subCategory.category_id);
                            category.$loaded().then(function() {
                                  catalogSubCategoryCtrl.category = category;
                                    var products = Products.getProductSubCategory(subCid);
                                        products.$loaded().then(function() {
                                              catalogSubCategoryCtrl.products = products;
                                  });
                          });
                  });
            }

            catalogSubCategoryCtrl.addOrder = function(pid) {
                CartAddOrder.initiate(pid);
            };

      }

])

.controller('CartCtrl', ['CartOrders', 'CartUpdateQty', 'CartRemoveLine', '$cookies',
        function (        CartOrders,   CartUpdateQty,   CartRemoveLine,   $cookies) {
                var cartCtrl = this;
                cartCtrl.order = {};
                var orderId = $cookies.get('orderId');

                var theOrder = CartOrders.getOrder(orderId)
                      theOrder.$loaded().then(function() {
                            cartCtrl.order = theOrder;

                            var theLines = CartOrders.getLines(orderId)
                                  theLines.$loaded().then(function() {
                                        cartCtrl.lines = theLines;
                                  });

                      });

                cartCtrl.removeLine = function(lid) {
                      CartRemoveLine.initiate(lid);
                }, function(error) {
                      catalogCtrl.error = error;
                };

                cartCtrl.updateQty = function(lid, qty) {
                      if (qty > 0 )
                            CartUpdateQty.initiate(lid, qty);
                      if (qty === "0")
                            CartRemoveLine.initiate(lid);
                }, function(error) {
                      cartCtrl.error = error;
                };

        }

])

.controller('CheckoutCtrl', ['Catalog', 'CartOrders', 'Products', '$scope', '$state', '$cookies',
      function (              Catalog,   CartOrders,   Products,   $scope,   $state,   $cookies) {
            var catalogCtrl = this;


      }

])

.controller('AuthCtrl', ['Auth', 'AlertService', 'Tenant', 'LoginHelper', 'md5', 'tid', '$state',
      function (          Auth,   AlertService,   Tenant,   LoginHelper,   md5,   tid,   $state) {
            var authCtrl = this;
            authCtrl.tenant = {};
            authCtrl.user = {};

            authCtrl.adminLogin = function() {
                Auth.$authWithPassword(authCtrl.user).then(function(auth) {
                    $state.go('admin.dashboard');
              /*    this is to setup file storing capabilities on Dreamfactory */
              /*    authCtrl.tenant = Tenant.getInstanceCredentials();
                    authCtrl.tenant.$loaded().then(function() {
                        LoginHelper.initiate({
                            email: authCtrl.tenant.dreamfactory_email,
                            password: authCtrl.tenant.dreamfactory_password
                        })



                    }).then(function() {
                        $state.go('admin.dashboard');
                    });

                */
                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            authCtrl.accountLogin = function() {
                Auth.$authWithPassword(authCtrl.user).then(function (auth) {
                    $state.go('account.detail');

                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            authCtrl.forgotPassword = function() {
                Auth.$resetPassword({
                    email: authCtrl.user.email
                    }).then(function() {
                        console.log("Password reset email sent successfully!");
                        $state.go('catalog.home');
                    }).catch(function(error) {
                        console.error("Error: ", error);
                    });
            };

      }

])

.controller('RegisterCtrl', ['Account', 'Auth', 'Profile', 'AlertService', 'Customer', 'md5', 'tid', '$scope', '$state',
      function (              Account,   Auth,   Profile,   AlertService,   Customer,   md5,   tid,   $scope,   $state) {
            var registerCtrl = this;
            registerCtrl.user = {};
            registerCtrl.cid = {};
            $scope.countries = Account.allCountries;

            registerCtrl.login = function() {
                Auth.$authWithPassword(registerCtrl.user).then(function (auth) {
                    $state.go('account.detail');
                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            registerCtrl.addCustomer = function() {
                registerCtrl.customer.customer_status_id = 1;
                registerCtrl.customer.customer_status = "1";
                registerCtrl.customer.customer_address_count = 0;
                registerCtrl.customer.customer_country = registerCtrl.customer.customer_country.name;
                Customer.addCustomer(registerCtrl.customer).then(function(custId) {
                    registerCtrl.cid = custId;
                    registerCtrl.addProfile();
                });

            }, function(error) {
                AlertService.addError(error.message);
            };

            registerCtrl.addProfile = function() {
                registerCtrl.profile = Profile.getProfile(registerCtrl.uid);
                registerCtrl.profile.$loaded().then(function() {
                    registerCtrl.profile.emailHash = md5.createHash(registerCtrl.customer.customer_email);
                    registerCtrl.profile.first_name = registerCtrl.customer.customer_first_name;
                    registerCtrl.profile.last_name = registerCtrl.customer.customer_last_name;
                    registerCtrl.profile.email = registerCtrl.customer.customer_email;
                    registerCtrl.profile.type = 'Customer';
                    registerCtrl.profile.status = 'Enabled';
                    registerCtrl.profile.cid = registerCtrl.cid;
                    registerCtrl.profile.tid = tid;
                    registerCtrl.profile.$save();
                    registerCtrl.login();
                });

            }, function(error) {
                AlertService.addError(error.message);
            };

            registerCtrl.createUser = function() {
                registerCtrl.user.email = registerCtrl.customer.customer_email;
                registerCtrl.user.password = registerCtrl.customer_password;
                Auth.$createUser(registerCtrl.user).then(function(user) {
                    registerCtrl.uid = user.uid;
                    registerCtrl.addCustomer();

                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            registerCtrl.registerCustomer = function() {
                registerCtrl.createUser();
            };

      }

])

.controller('RegisterTenantCtrl', ['Auth', 'Profile', 'AlertService', 'Tenant', 'md5', 'tid', '$state',
      function (                    Auth,   Profile,   AlertService,   Tenant,   md5,   tid,   $state) {
            var registerTenantCtrl = this;
            registerTenantCtrl.tenant = {};

            registerTenantCtrl.createProfile = function() {
                authCtrl.profile = Profile.getProfile(registerTenantCtrl.tenant.uid);
                  authCtrl.profile.$loaded().then(function() {
                      registerTenantCtrl.profile.emailHash = md5.createHash(registerTenantCtrl.user.email);
                      registerTenantCtrl.profile.name = registerTenantCtrl.tenant.name;
                      registerTenantCtrl.profile.tid = registerTenantCtrl.tid;
                      registerTenantCtrl.profile.type = 'Tenant';
                      registerTenantCtrl.profile.$save();
                      registerTenantCtrl.login();
                  });

            }, function(error) {

                AlertService.addError(error.message);
            };

            authCtrl.registerTenant = function() {
                var domainCode = registerTenantCtrl.user.email.replace(/.*@/, "");
                var n = domainCode.indexOf(".");
                  domainCode = domainCode.substring(0, n);
                      Auth.$createUser(registerTenantCtrl.user).then(function (user) {
                          registerTenantCtrl.tenant.uid = user.uid;
                          registerTenantCtrl.tenant.first_name = authCtrl.user.first_name;
                          registerTenantCtrl.tenant.last_name = authCtrl.user.last_name;
                          registerTenantCtrl.tenant.domain = authCtrl.user.email.replace(/.*@/, "");
                          registerTenantCtrl.tenant.domain_code = domainCode;
                              Tenant.all.$add(registerTenantCtrl.tenant).then(function(ref) {
                                  authCtrl.tid = ref.key();
                                  authCtrl.createProfile();
                              })
                      });

              }, function(error) {

                AlertService.addError(error.message);
              };

      }

])
