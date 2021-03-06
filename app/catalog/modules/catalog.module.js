'use strict';

angular.module('CatalogModule', [
  'ngCookies',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngMessages',
  'firebase',
  'ui.bootstrap',
  'ui.router',
  'ui.select',
  'ui.grid'

])

.config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
})

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
                  params: {
                    cid: null,
                  },
                  views: {
                      "header@catalog": {
                          controller: 'CatalogCtrl as catalogCtrl',
                          templateUrl: 'catalog/views/common/header.html'
                      },
                      "main@catalog": {
                          controller: 'CartCtrl as cartCtrl',
                          templateUrl: 'catalog/views/shoppingcart/checkout.html'
                      },
                      "footer@catalog": {
                          templateUrl: 'catalog/views/common/footer.html'
                      }
                  }
              })
              .state('catalog.revieworder', {
                  url: 'revieworder',
                  params: {
                    cid: null,
                  },
                  views: {
                      "header@catalog": {
                          controller: 'CatalogCtrl as catalogCtrl',
                          templateUrl: 'catalog/views/common/header.html'
                      },
                      "main@catalog": {
                          controller: 'CartCtrl as cartCtrl',
                          templateUrl: 'catalog/views/shoppingcart/revieworder.html'
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

              getCategory: function(cid) {
                  return $firebaseObject(ref.child(tid).child(cid));
              },

              getSubCategories: function(cid) {
                  return $firebaseArray(subRef.child(tid).orderByChild("category_id").equalTo(cid));
              },

              getSubCategory: function(sid) {
                  return $firebaseObject(subRef.child(tid).child(sid));
              },

              all: categories,

              pulldown: pulldownCategories,

              allMenus: subCategories,

              storeDefaults: storeDefaults

          };

          return catalog;

      }

])

.factory('TheBanner', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (        $firebaseArray,   $firebaseObject,   FirebaseUrl,  tid) {
          var ref = new Firebase(FirebaseUrl+'banner_images');

          var banner = {

              getImages: function(bid) {
                  return $firebaseArray(ref.child(tid).child(bid));
              },

          };

          return banner;

      }

])

.factory('TheCoupons', ['$firebaseObject', 'FirebaseUrl', 'tid',
      function (         $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'coupons');

          var coupon = {

              getCoupon: function(id) {
                  return $firebaseObject(ref.child(tid).child(id));
              },

          };

          return coupon;

      }

])

.factory('TheGiftCards', ['$firebaseObject', 'FirebaseUrl', 'tid',
      function (           $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'giftcards');

          var giftcard = {

              updateGiftCard: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'giftcards/'+tid+'/'+obj.$id);
                  return theRef.update( {giftcard_status: obj.giftcard_status } );
              },

              getGiftCard: function(gid) {
                  return $firebaseObject(ref.child(tid).child(gid));
              },

          };

          return giftcard;
      }

])

.factory('TheStore', ['$firebaseObject', 'FirebaseUrl', 'tid',
      function (       $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'stores');

          var store = {

              updateOrderCount: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'stores/'+tid+'/'+obj.$id)
                  return theRef.update({ store_current_order_number: obj.store_current_order_number });
              },

          };

          return store;

      }

])

.factory('TheProduct', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (         $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
            var ref = new Firebase(FirebaseUrl+'products');
            var products = $firebaseArray(ref.child(tid));
            var featuredProducts = $firebaseArray(ref.child(tid).orderByChild("product_featured").equalTo(true));

            var product = {

                getProduct: function(pid) {
                    return $firebaseObject(ref.child(tid).child(pid));
                },

                getProductCategory: function(cid) {
                    return $firebaseArray(ref.child(tid).orderByChild('product_category_id').equalTo(cid));
                },

                getProductSubCategory: function(sid) {
                    return $firebaseArray(ref.child(tid).orderByChild('product_sub_category_id').equalTo(sid));
                },

                getProductThumbnails: function(pid) {
                    var theRef = new Firebase(FirebaseUrl+'products/'+tid+'/'+pid+'/thumbnails');
                    return $firebaseArray(theRef);
                },

                addView: function(pid) {
                    var theRef = new Firebase(FirebaseUrl+'product_logs/'+tid+'/'+pid+'/');
                    return theRef.push ({view_date: Firebase.ServerValue.TIMESTAMP});
                },

                all: products,

                allFeatured: featuredProducts

          };

          return product;

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

.factory('TheCustomer', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (          $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'customers');
          var thecustomers = $firebaseArray(ref.child(tid).orderByPriority());

          var thecustomer = {

              getCustomer: function(cid) {
                  return $firebaseObject(ref.child(tid).child(cid));
              },

              addCustomer: function(obj) {
                  obj.customer_date_added = Firebase.ServerValue.TIMESTAMP;
                  return thecustomer.all.$add(obj).then(function(postRef) {
                      return postRef.key();
                  });
              },

              addOrder: function(id, orderId) {
                  var orderRef = new Firebase(FirebaseUrl+'customers/'+tid+'/'+id+'/orders');
                  return orderRef.push( {order_id: orderId} );
              },

              addLog: function(id) {
                  var custRef = new Firebase(FirebaseUrl+'customer_logs/'+tid+'/'+id+'/');
                  return custRef.push({ login_date: Firebase.ServerValue.TIMESTAMP });
              },

              updateRewards: function(theObj) {
                  var custRef = new Firebase(FirebaseUrl+'customers/'+tid+'/'+theObj.$id);
                  return custRef.update( {reward_points: theObj.reward_points} );
              },

              all: thecustomers

          };

          return thecustomer;
    }

])

.factory('CartOrders', ['$firebaseArray', '$firebaseObject', 'FirebaseUrl', 'tid',
      function (         $firebaseArray,   $firebaseObject,   FirebaseUrl,   tid) {
          var ref = new Firebase(FirebaseUrl+'orders');
          var cartorders = $firebaseArray(ref.child(tid));

          var taxRef = new Firebase(FirebaseUrl+'tax_groups');

          var cartorder = {

              addOrder: function() {
                  return cartorders.$add({ status: 'cart', items: 0, sub_total: 0, create_date: Firebase.ServerValue.TIMESTAMP }).then(function(theRef) {
                      return theRef.key();
                  });
              },

              getOrder: function(oid) {
                  return $firebaseObject(ref.child(tid).child(oid));
              },

              updateHeader: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {items: obj.items, sub_total: obj.sub_total} );
              },

              updateHeaderTotal: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {total: obj.total} );
              },

              addLine: function(obj, oid) {
                  console.log(obj)
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+oid+'/lines');
                  return theRef.push( {product_id: obj.$id, product_name: obj.product_name, regular_price: obj.product_price,
                      line_quantity: obj.product_qty, special_price: obj.special_price, product_image: obj.product_image,
                      line_total: obj.line_total, product_tax_group_id: obj.product_tax_group_id, reward_points_total: obj.reward_points_total} );
              },

              removeLine: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid+'/lines/'+obj.lid);
                  return theRef.remove();
              },

              getLines: function(oid) {
                  return $firebaseArray(ref.child(tid).child(oid).child('/lines'));
              },

              getTaxes: function(oid) {
                  return $firebaseArray(ref.child(tid).child(oid).child('/taxes'));
              },

              getTaxRates: function(tgid) {
                  return $firebaseArray(taxRef.child(tid).child(tgid).child('/tax_entries'));
              },

              updateTax: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  theRef.update( {tax_total: obj.header_tax_total} );
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid+'/taxes');
                  theRef.remove();
                  return theRef.push( {tax_name: obj.tax_name, tax_total: obj.tax_total} );
              },

              updateLine: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid+'/lines/'+obj.lid);
                  return theRef.update( {line_quantity: obj.qty, line_total: obj.line_total, reward_points_total: obj.reward_points_total} );
              },

              updateCoupon: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {coupon_id: obj.coupon_id, coupon_discount: obj.coupon_discount} );
              },

              updateGiftCard: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {giftcard_id: obj.giftcard_id, giftcard_discount: obj.giftcard_discount} );
              },

              updateRewardPoints(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {reward_points_used: obj.reward_points_used, reward_points_discount: obj.reward_points_discount} );
              },

              updateCustomer: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {customer_id: obj.cid, customer_name: obj.customer_name, customer_email: obj.customer_email, customer_phone: obj.customer_phone} );
              },

              updateOrderID: function(obj) {
                  var theRef = new Firebase(FirebaseUrl+'orders/'+tid+'/'+obj.oid);
                  return theRef.update( {order_id: obj.order_id} );
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

.service('CartUpdateHeader', ['CartOrders',
        function (             CartOrders) {
      		      this.initiate = function (oid) {

                    var theHeader = {};
                    var theLine = {};
                    theHeader.oid = oid;
                    theHeader.items = 0;
                    theHeader.sub_total = 0;
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
                                  theHeader.sub_total = theHeader.sub_total + (theLine.qty * theLine.price);

                              }

                              CartOrders.updateHeader(theHeader);

                        });

                };

        }

])

.service('CartUpdateTax', ['CartOrders',
        function (          CartOrders) {
      		      this.initiate = function (tgid, oid) {

                    var theTax = {};
                    theTax.oid = oid;
                    theTax.header_tax_total = 0;

                    var lines = CartOrders.getLines(oid);
                          lines.$loaded().then(function() {

                                var taxRates = CartOrders.getTaxRates(tgid);
                                      taxRates.$loaded().then(function() {

                                              for(var i = 0; i < taxRates.length; i++) {

                                                    theTax.tax_total = 0;
                                                    theTax.tax_name = taxRates[i].tax_name;

                                                    for(var x = 0; x < lines.length; x++) {

                                                          if (taxRates[i].tax_type === "Percent")
                                                                theTax.tax_total = theTax.tax_total + (lines[x].line_total * taxRates[i].tax_rate);
                                                          else
                                                                theTax.tax_total = theTax.tax_total + taxRates[i].tax_rate;

                                                    }

                                                    theTax.header_tax_total = theTax.header_tax_total + theTax.tax_total;
                                                    CartOrders.updateTax(theTax);

                                              }

                                              var theOrder = CartOrders.getOrder(oid);
                                                    theOrder.$loaded().then(function() {
                                                          var theHeader = {}
                                                          theHeader.oid = oid;
                                                          theHeader.total = theOrder.sub_total + theTax.header_tax_total;
                                                          CartOrders.updateHeaderTotal(theHeader);

                                                    });

                                      });

                          });

                };

        }

])

.service('CartAddOrder', ['Catalog', 'CartOrders', 'TheProduct', 'CartUpdateTax', '$cookies',
      function (           Catalog,   CartOrders,   TheProduct,   CartUpdateTax,   $cookies) {
    		    this.initiate = function (pid) {

                  var storeDefaults = Catalog.storeDefaults;
                  var oid = $cookies.get('orderId');

                  var theHeader = CartOrders.getOrder(oid);
                      theHeader.$loaded().then(function() {
                            theHeader.items = theHeader.items + 1;
                            theHeader.oid = oid;

                            var theProduct = TheProduct.getProduct(pid);
                                  theProduct.$loaded().then(function() {
                                        theProduct.product_qty = 1;

                                        if (theProduct.special_price === undefined) {
                                              theProduct.special_price = null;
                                              theProduct.line_total = theProduct.product_price;
                                              theHeader.sub_total = theHeader.sub_total + theProduct.product_price;
                                        } else {
                                              theProduct.line_total = theProduct.special_price;
                                              theHeader.sub_total = theHeader.sub_total + theProduct.special_price;
                                        }
                                        theProduct.reward_points_total = theProduct.line_total * storeDefaults.store_points_per_dollar;
                                        CartOrders.updateHeader(theHeader);
                                        CartOrders.addLine(theProduct, oid);
                                        CartUpdateTax.initiate(theProduct.product_tax_group_id, oid);

                                  });

                      });

            };

      }

])



.service('CartUpdateLine', ['CartOrders', 'CartUpdateHeader', 'CartUpdateTax', 'TheProduct', '$cookies',
      function (             CartOrders,   CartUpdateHeader,   CartUpdateTax,   TheProduct,   $cookies) {
    		      this.initiate = function (lid, qty, pid, points_per_dollar) {

                    var oid = $cookies.get('orderId');
                    var theLine = {};
                    theLine.qty = Number(qty);
                    theLine.oid = oid;
                    theLine.lid = lid;

                    var theProduct = TheProduct.getProduct(pid);
                          theProduct.$loaded().then(function() {

                                if (theProduct.special_price === undefined)
                                      theLine.line_total = theProduct.product_price * theLine.qty;
                                else
                                      theLine.line_total = theProduct.special_price * theLine.qty;

                                theLine.reward_points_total = theLine.line_total * points_per_dollar;

                                CartOrders.updateLine(theLine);
                                CartUpdateHeader.initiate(oid);
                                CartUpdateTax.initiate(theProduct.product_tax_group_id, oid);

                          });

            };

      }

])

.service('CartRemoveLine', ['CartOrders', 'CartUpdateHeader', 'CartUpdateTax', '$cookies',
        function (           CartOrders,   CartUpdateHeader,   CartUpdateTax,   $cookies) {
      		      this.initiate = function (lid, tgid) {
                      var oid = $cookies.get('orderId');
                      var theLine = {};
                      theLine.lid = lid;
                      theLine.oid = oid;
                      CartOrders.removeLine(theLine);
                      CartUpdateHeader.initiate(oid);
                      CartUpdateTax.initiate(tgid, oid);

                };

        }

])

.controller('CatalogCtrl', ['Catalog', 'CartOrders', 'TheProduct', 'CartUpdateLine', 'CartRemoveLine', '$scope', '$state', '$cookies',
      function (             Catalog,   CartOrders,   TheProduct,   CartUpdateLine,   CartRemoveLine,   $scope,   $state,   $cookies) {
            var catalogCtrl = this;
            $scope.product = {};
            $scope.products = TheProduct.all;
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
                  var orderTotal = CartOrders.getOrder($cookies.get('orderId'))
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

            catalogCtrl.updateLine = function(lid, qty, pid) {
                  if (qty > 0 )
                        CartUpdateLine.initiate(lid, qty, pid, catalogCtrl.store.store_points_per_dollar);
                  if (qty === "0")
                        CartRemoveLine.initiate(lid);

            }, function(error) {
                  catalogCtrl.error = error;
            };

            catalogCtrl.removeLine = function(lid, tgid) {
              console.log(tgid)
                  CartRemoveLine.initiate(lid, tgid);
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


.controller('CarouselCtrl', ['TheBanner',
      function (              TheBanner) {
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

.controller('CatalogCategoryCtrl', ['Catalog', 'TheProduct', 'CartAddOrder', '$state', '$stateParams',
      function (                     Catalog,   TheProduct,   CartAddOrder,   $state,   $stateParams) {
            var catalogCategoryCtrl = this;
            var cid = $stateParams.cid

            if (cid === null) {
                  $state.go('catalog.home');
            } else {
                  var category = Catalog.getCategory(cid);
                      category.$loaded().then(function() {
                          catalogCategoryCtrl.category = category;
                          var products = TheProduct.getProductCategory(cid);
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

.controller('CatalogFeaturedCtrl', ['CartAddOrder', 'TheProduct', '$state',
      function (                     CartAddOrder,   TheProduct,   $state) {
            var catalogFeaturedCtrl = this;
            catalogFeaturedCtrl.featuredProducts = TheProduct.allFeatured;

            catalogFeaturedCtrl.goProduct = function(pid) {
                $state.go('catalog.product', {'pid': pid});
            };

            catalogFeaturedCtrl.addOrder = function(pid) {
                CartAddOrder.initiate(pid);
            };

      }

])

.controller('CatalogProductCtrl', ['$state', 'TheProduct', 'CartAddOrder', '$stateParams',
      function (                    $state,   TheProduct,   CartAddOrder,   $stateParams) {
            var catalogProductCtrl = this;

            var pid = $stateParams.pid

            if (pid === null) {
                $state.go('catalog.home');
            } else {
                var product = TheProduct.getProduct(pid);
                    product.$loaded().then(function() {
                      catalogProductCtrl.product = product;
                      TheProduct.addView(pid);
                });
                var thumbnails = TheProduct.getProductThumbnails(pid);
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

.controller('CatalogSubCategoryCtrl', ['Catalog', 'CartAddOrder', 'TheProduct', '$state', '$stateParams',
      function (                        Catalog,   CartAddOrder,   TheProduct,   $state,   $stateParams) {
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
                var subCategory = Catalog.getSubCategory(subCid);
                    subCategory.$loaded().then(function() {
                        catalogSubCategoryCtrl.subCategory = subCategory;
                          var category = Catalog.getCategory(catalogSubCategoryCtrl.subCategory.category_id);
                            category.$loaded().then(function() {
                                  catalogSubCategoryCtrl.category = category;
                                    var products = TheProduct.getProductSubCategory(subCid);
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

.controller('CartCtrl', ['Auth', 'Catalog', 'CartOrders', 'TheCoupons', 'TheGiftCards', 'CartUpdateLine', 'Messages', 'AlertService', 'CartRemoveLine', 'TheCustomer', 'TheStore', 'md5', 'tid', 'Profile', '$state', '$cookies',
        function (        Auth,   Catalog,   CartOrders,   TheCoupons,   TheGiftCards,   CartUpdateLine,   Messages,   AlertService,   CartRemoveLine,   TheCustomer,   TheStore,   md5,   tid,   Profile,   $state,   $cookies) {
                var cartCtrl = this;
                cartCtrl.store = Catalog.storeDefaults;
                var obj = {};
                obj.oid = $cookies.get('orderId');
                cartCtrl.status = null;
                cartCtrl.checkout_type = null;

                var theOrder = CartOrders.getOrder(obj.oid)
                      theOrder.$loaded().then(function() {
                            if (theOrder.coupon_discount === undefined)
                                theOrder.coupon_discount = 0;
                            if (theOrder.giftcard_discount === undefined)
                                theOrder.giftcard_discount = 0;
                            if (theOrder.reward_points_discount === undefined)
                                theOrder.reward_points_discount = 0;
                            cartCtrl.order = theOrder;
                            cartCtrl.order.total = (theOrder.sub_total + theOrder.tax_total) - (theOrder.coupon_discount + theOrder.giftcard_discount + theOrder.reward_points_discount);
                            var theLines = CartOrders.getLines(obj.oid)
                                  theLines.$loaded().then(function() {
                                        cartCtrl.lines = theLines;

                                        var theTaxes = CartOrders.getTaxes(obj.oid)
                                              theTaxes.$loaded().then(function() {
                                                    cartCtrl.taxes = theTaxes;
                                              });

                                        obj.cid = cartCtrl.order.customer_id;
                                        if (obj.cid != null) {
                                              var theCustomer = TheCustomer.getCustomer(obj.cid);
                                                  theCustomer.$loaded().then(function(){
                                                      cartCtrl.customer = theCustomer;
                                                  });
                                        };
                                });
                      });

                cartCtrl.accountLogin = function() {
                      Auth.$authWithPassword(cartCtrl.user).then(function (auth) {
                        var theProfile = Profile.getProfile(auth.uid);
                            theProfile.$loaded().then(function(){
                                var theCustomer = TheCustomer.getCustomer(theProfile.cid);
                                    theCustomer.$loaded().then(function(){
                                        if (theCustomer.customer_status == "Disabled"){
                                            AlertService.addError(Messages.login_disabled);
                                            cartCtrl.user = null;
                                        } else {
                                            cartCtrl.customer = theCustomer;
                                            cartCtrl.status = "existing";
                                        };
                                    });
                            });
                      }, function(error) {
                            AlertService.addError(error.message);
                            });
                };


                cartCtrl.removeLine = function(lid, tgid) {
                      CartRemoveLine.initiate(lid, tgid);
                }, function(error) {
                      cartCtrl.error = error;
                };

                cartCtrl.CheckoutTypeRegister = function() {
                    cartCtrl.checkout_type = "newRegister";
                };

                cartCtrl.CheckoutTypeGuest = function() {
                    cartCtrl.checkout_type = null;
                };

                cartCtrl.updateLine = function(lid, qty, pid) {
                      if (qty > 0 )
                            CartUpdateLine.initiate(lid, qty, pid, cartCtrl.store.store_points_per_dollar);
                      if (qty === "0")
                            CartRemoveLine.initiate(lid, pid);
                }, function(error) {
                      cartCtrl.error = error;
                };

                cartCtrl.couponType = function(obj) {
                    if (obj.coupon_type == "Percent") {
                          obj.coupon_discount = (obj.coupon_discount/100) * cartCtrl.order.sub_total;
                    };
                };

                cartCtrl.updateCoupon = function() {
                      var theCoupon = TheCoupons.getCoupon(cartCtrl.order.coupon_code);
                          theCoupon.$loaded().then(function() {
                              if (theCoupon.coupon_name !== undefined) {
                                  theCoupon.$loaded().then(function() {
                                      cartCtrl.couponType(theCoupon);
                                      obj.coupon_id = theCoupon.$id;
                                      obj.coupon_discount = Number(theCoupon.coupon_discount);
                                      obj.total = cartCtrl.order.total - theCoupon.coupon_discount;
                                      CartOrders.updateCoupon(obj);
                                      CartOrders.updateHeaderTotal(obj);
                                  });
                              } else {
                                  AlertService.addError(Messages.invalid_coupon_code);
                                  cartCtrl.order.coupon_code = null;
                              };
                          });

                };

                cartCtrl.updateGiftCard = function() {
                  var theGiftcard = TheGiftCards.getGiftCard(cartCtrl.order.giftcard_code);
                      theGiftcard.$loaded().then(function() {
                          if (theGiftcard.giftcard_amount !== undefined) {
                              theGiftcard.$loaded().then(function() {
                                  obj.giftcard_id = theGiftcard.$id;
                                  obj.giftcard_discount = Number(theGiftcard.giftcard_amount);
                                  obj.total = cartCtrl.order.total - theGiftcard.giftcard_amount;
                                  theGiftcard.giftcard_status = "Claimed";
                                  TheGiftCards.updateGiftCard(theGiftcard);
                                  CartOrders.updateGiftCard(obj);
                                  CartOrders.updateHeaderTotal(obj);
                              });
                          } else {
                              AlertService.addError(Messages.invalid_giftcard_code);
                              cartCtrl.order.giftcard_code = null;
                          };
                      });
                };

                cartCtrl.updateRewardPoints = function() {
                    if (cartCtrl.order.reward_points_used > cartCtrl.customer.reward_points) {
                        AlertService.addError(Messages.invalid_points);
                        cartCtrl.order.reward_points_used = null;
                    } else {
                        obj.reward_points_discount = cartCtrl.order.reward_points_used * 0.01;
                        obj.total = cartCtrl.order.total - obj.reward_points_discount;
                        obj.reward_points_used = cartCtrl.order.reward_points_used;
                        CartOrders.updateRewardPoints(obj);
                        CartOrders.updateHeaderTotal(obj);
                    };
                };

                cartCtrl.addOrderToCustomer = function(cid, oid) {
                  obj.cid = cid;
                  obj.customer_name = cartCtrl.customer.customer_first_name + ' ' + cartCtrl.customer.customer_last_name;
                  obj.customer_email = cartCtrl.customer.customer_email;
                  obj.customer_phone = cartCtrl.customer.customer_phone;
                  obj.order_id = cartCtrl.store.store_default_order_prefix + '-' + cartCtrl.store.store_current_order_number;
                  cartCtrl.store.store_current_order_number = cartCtrl.store.store_current_order_number + 1;
                  if (cartCtrl.order.reward_points_used == null)
                      cartCtrl.order.reward_points_used = 0;
                  cartCtrl.customer.reward_points = (cartCtrl.customer.reward_points + cartCtrl.order.sub_total) - cartCtrl.order.reward_points_used;
                  CartOrders.updateCustomer(obj);
                  CartOrders.updateOrderID(obj);
                  TheStore.updateOrderCount(cartCtrl.store);
                  TheCustomer.addOrder(cid, oid);
                  TheCustomer.updateRewards(cartCtrl.customer);
                  $state.go('catalog.revieworder');
                };

                cartCtrl.createUser = function(obj) {
                    cartCtrl.user.email = cartCtrl.customer.customer_email;
                    cartCtrl.user.password = cartCtrl.customer.customer_password;
                    Auth.$createUser(cartCtrl.user).then(function(user) {
                        cartCtrl.uid = user.uid;
                        TheCustomer.addCustomer(obj).then(function(cid){
                            cartCtrl.customer.$id = cid;
                            Profile.getProfile(cartCtrl.uid);
                            cartCtrl.profile.$loaded().then(function() {
                                cartCtrl.profile.emailHash = md5.createHash(registerCtrl.customer.customer_email);
                                cartCtrl.profile.first_name = cartCtrl.customer.customer_first_name;
                                cartCtrl.profile.last_name = cartCtrl.customer.customer_last_name;
                                cartCtrl.profile.email = cartCtrl.customer.customer_email;
                                cartCtrl.profile.type = 'Customer';
                                cartCtrl.profile.status = 'Enabled';
                                cartCtrl.profile.cid = cartCtrl.customeer.$id;
                                cartCtrl.profile.tid = tid;
                                cartCtrl.profile.$save();
                            });
                        });


                    }, function(error) {
                        AlertService.addError(error.message);
                    });
                };

                cartCtrl.confirmOrder = function() {
          /*       send email and/or text to customer */
                    if (cartCtrl.status == "existing") {
                          cartCtrl.addOrderToCustomer(cartCtrl.customer.$id, cartCtrl.order.$id);

                    } else if (cartCtrl.checkout_type == "newRegister") {
                          if (cartCtrl.customer.customer_email == cartCtrl.confirm_customer_email) {
                              if (cartCtrl.customer.customer_password == cartCtrl.confirm_customer_password) {
                                  cartCtrl.customer.reward_points = 0;
                                  cartCtrl.createUser(cartCtrl.customer);
                                  cartCtrl.addOrderToCustomer(cartCtrl.customer.$id, cartCtrl.order.$id);
                              } else {
                                  AlertService.addError(Messages.passwords_dont_match);
                              };
                          } else {
                              AlertService.addError(Messages.emails_dont_match);
                          };

                    } else {
                          if (cartCtrl.customer.customer_email == cartCtrl.confirm_customer_email) {
                              var theCheck = Customer.getEmail(cartCtrl.customer.customer_email);
                              theCheck.$loaded().then(function() {
                                  if(theCheck == null) {
                                      cartCtrl.customer.reward_points = 0;
                                      TheCustomer.addCustomer(cartCtrl.customer).then(function(cid) {
                                      cartCtrl.customer.$id = cid;
                                      });
                                  };
                                cartCtrl.customer = theCheck[0];
                                cartCtrl.addOrderToCustomer(cartCtrl.customer.$id, cartCtrl.order.$id);
                              });
                          } else {
                              AlertService.addError(Messages.emails_dont_match);
                          };
                    };
                };

        }

])

.controller('AuthCtrl', ['Auth', 'AlertService', 'Profile', 'TheCustomer', 'md5', 'Messages', 'tid', '$state',
      function (          Auth,   AlertService,   Profile,   TheCustomer,   md5,   Messages,   tid,   $state) {
            var authCtrl = this;
            authCtrl.user = {};

            authCtrl.adminLogin = function() {
                Auth.$authWithPassword(authCtrl.user).then(function(auth) {
                  var theProfile = Profile.getProfile(auth.uid);
                      theProfile.$loaded().then(function(){
                          if (theProfile.status == "Disabled") {
                              AlertService.addError(Messages.login_disabled);
                              authCtrl.user = null;
                          } else {
                              $state.go('admin.dashboard');
                          };
                      });
                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            authCtrl.accountLogin = function() {
                Auth.$authWithPassword(authCtrl.user).then(function (auth) {
                    var theProfile = Profile.getProfile(auth.uid);
                        theProfile.$loaded().then(function(){
                            var theCustomer = TheCustomer.getCustomer(theProfile.cid);
                                theCustomer.$loaded().then(function(){
                                    if (theCustomer.customer_status == "Disabled"){
                                        AlertService.addError(Messages.login_disabled);
                                        authCtrl.user = null;
                                    } else {
                                        $state.go('account.detail');
                                    };
                                });
                        });
                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            authCtrl.forgotPassword = function() {
                Auth.$resetPassword({
                    email: authCtrl.user.email
                    }).then(function() {
                        AlertService.addSuccess(Messages.send_email_success);
                        $state.go('catalog.home');
                    }).catch(function(error) {
                        console.error("Error: ", error);
                    });
            };

      }

])

.controller('RegisterCtrl', ['Countries', 'Auth', 'Profile', 'AlertService', 'TheCustomer', 'md5', 'tid', '$scope', '$state',
      function (              Countries,   Auth,   Profile,   AlertService,   TheCustomer,   md5,   tid,   $scope,   $state) {
            var registerCtrl = this;
            registerCtrl.user = {};
            registerCtrl.cid = {};
            $scope.countries = Countries.all;

            registerCtrl.accountPage = function() {
                $state.go('account.detail');
            };

            registerCtrl.login = function() {
                Auth.$authWithPassword(registerCtrl.user).then(function (auth) {
                    var theProfile = Profile.getProfile(auth.uid);
                        theProfile.$loaded().then(function(){
                            var theCustomer = Customer.getCustomer(theProfile.cid);
                                theCustomer.$loaded().then(function(){
                                    if (theCustomer.customer_status == "Disabled"){
                                        AlertService.addError(Messages.login_disabled);
                                        registerCtrl.user = null;
                                    } else {
                                        $state.go('account.detail');
                                    };
                                });
                        });
                }, function(error) {
                    AlertService.addError(error.message);
                });
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
                    registerCtrl.accountPage();
                });
            }, function(error) {
                AlertService.addError(error.message);
            };

            registerCtrl.addCustomer = function() {
                registerCtrl.customer.customer_status_id = 1;
                registerCtrl.customer.customer_status = "1";
                registerCtrl.customer.customer_address_count = 0;
                registerCtrl.customer.customer_country = registerCtrl.customer.customer_country.name;
                TheCustomer.addCustomer(registerCtrl.customer).then(function(cid) {
                    registerCtrl.cid = cid;
                    registerCtrl.addProfile();
                });
            }, function(error) {
                AlertService.addError(error.message);
            };

            registerCtrl.createUser = function() {
                registerCtrl.user.email = registerCtrl.customer.customer_email;
                registerCtrl.user.password = registerCtrl.customer_password;
                Auth.$createUser(registerCtrl.user).then(function(user) {
                    registerCtrl.uid = user.uid;
                    Auth.$authWithPassword(registerCtrl.user).then(function (auth) {
                        registerCtrl.addCustomer();
                    }, function(error) {
                        AlertService.addError(error.message);
                    });
                }, function(error) {
                    AlertService.addError(error.message);
                });
            };

            registerCtrl.registerCustomer = function() {
                console.log('got here')
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
