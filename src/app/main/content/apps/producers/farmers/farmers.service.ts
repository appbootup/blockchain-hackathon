import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FarmersService implements Resolve<any>
{
  // products: any[];
  farmers: any[];
  // onProductsChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onFarmersChanged: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getFarmers()
      ]).then(
        () => {
          resolve();
        },
        reject
        );
    });
  }

  getFarmers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/producers-farmers')
        .subscribe((response: any) => {
          this.farmers = response;
          this.onFarmersChanged.next(this.farmers);
          resolve(response);
        }, reject);
      // this.farmers = [{
      //   'id': 1,
      //   'firstName': 'Rajappa',
      //   'lastName': 'Gowda',
      //   'address': '#231, Hanuman Doddi, Kanakapura, Karnataka',
      //   'idProof': 'Aadhar',
      //   'idNumber': '1234-567-8901',
      //   'images': [],
      //   'timestamp': '1516504545005'
      // }];
      this.onFarmersChanged.next(this.farmers);
      resolve(this.farmers);
      // this.http.get('api/e-commerce-products')
      //     .subscribe((response: any) => {
      //         this.products = response;
      //         this.onProductsChanged.next(this.products);
      //         resolve(response);
      //     }, reject);
    });
  }
  // getProducts(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.products = [
  //       {
  //         'id': '1',
  //         'name': 'Printed Dress',
  //         'handle': 'printed-dress',
  //         'description': 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 9.309,
  //         'priceTaxIncl': 10.24,
  //         'taxRate': 10,
  //         'comparedPrice': 19.90,
  //         'quantity': 3,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '2',
  //         'name': 'Green Skirt',
  //         'handle': 'green-skirt',
  //         'description': 'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
  //         'categories': [
  //           'Skirts',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 22.381,
  //         'priceTaxIncl': 24.62,
  //         'taxRate': 10,
  //         'comparedPrice': 29.90,
  //         'quantity': 92,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '3',
  //         'name': 'Printed Dress',
  //         'handle': 'printed-dress',
  //         'description': 'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 44.809,
  //         'priceTaxIncl': 49.29,
  //         'taxRate': 10,
  //         'comparedPrice': 59.90,
  //         'quantity': 60,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '4',
  //         'name': 'White T-Shirt',
  //         'handle': 'white-t-shirt',
  //         'description': 'Incididunt nostrud culpa labore nostrud veniam nostrud dolore velit sunt laborum ad reprehenderit. Excepteur enim irure ut labore elit ut deserunt qui qui consequat quis do nostrud ad. Aliqua dolor labore ut occaecat laborum irure. Aute in deserunt do aute laborum sit et reprehenderit minim voluptate proident do est.',
  //         'categories': [
  //           'T-Shirts',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 62.827,
  //         'priceTaxIncl': 69.11,
  //         'taxRate': 10,
  //         'comparedPrice': 79.90,
  //         'quantity': 101,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': false
  //       },
  //       {
  //         'id': '5',
  //         'name': 'Red Hoodie',
  //         'handle': 'red-hoodie',
  //         'description': 'Laboris laborum minim qui reprehenderit duis fugiat ea anim labore incididunt duis. Officia adipisicing anim amet in sit aliqua fugiat quis do sint non velit eu. Labore occaecat labore elit voluptate Lorem adipisicing et ipsum id et reprehenderit ullamco. Elit in nulla laborum nulla quis dolor deserunt magna dolor ad anim magna. Esse aute reprehenderit anim sit est et quis est. Ex reprehenderit culpa deserunt qui sint eiusmod reprehenderit ipsum consequat ut.',
  //         'categories': [
  //           'Hoodies',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 9.309,
  //         'priceTaxIncl': 10.24,
  //         'taxRate': 10,
  //         'comparedPrice': 19.90,
  //         'quantity': 19,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '6',
  //         'name': 'Red Hoodie',
  //         'handle': 'red-hoodie',
  //         'description': 'Tempor sunt tempor veniam non culpa excepteur. Ea irure elit non cupidatat cillum dolore. Sit incididunt qui dolore ipsum commodo aliqua amet cupidatat incididunt nisi qui consectetur. Cillum eu aute qui irure aute adipisicing cupidatat magna.',
  //         'categories': [
  //           'Hoodies',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 53.963,
  //         'priceTaxIncl': 59.36,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 101,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '7',
  //         'name': 'Summer Dress',
  //         'handle': 'summer-dress',
  //         'description': 'Excepteur commodo ipsum in ex esse elit ea id voluptate id occaecat. Sunt Lorem ipsum ut proident eu aliquip velit non minim. Sunt velit deserunt veniam eu non veniam. Eiusmod sit ex et id incididunt labore aliqua eu aute dolor cillum ex mollit mollit. Incididunt voluptate adipisicing eiusmod non ipsum cupidatat excepteur enim in pariatur eu. Labore dolor qui exercitation amet labore laboris Lorem do adipisicing. Minim non consectetur adipisicing esse ut occaecat incididunt eiusmod commodo et cillum pariatur.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 58.372,
  //         'priceTaxIncl': 64.21,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 34,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '8',
  //         'name': 'Black Shoes',
  //         'handle': 'black-shoes',
  //         'description': 'Velit cillum cupidatat eiusmod ea quis sit. Consequat dolore elit sunt sunt voluptate irure incididunt consectetur non. Dolore veniam ipsum anim commodo ex. Proident ipsum nostrud ullamco sit. Ad dolore nulla qui mollit laborum ex ipsum.',
  //         'categories': [
  //           'Shoes',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 63.390,
  //         'priceTaxIncl': 69.73,
  //         'taxRate': 10,
  //         'comparedPrice': 79.90,
  //         'quantity': 4,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': false
  //       },
  //       {
  //         'id': '9',
  //         'name': 'Yellow Bag',
  //         'handle': 'yellow-bag',
  //         'description': 'Consequat minim velit commodo Lorem ipsum velit elit amet ut. In deserunt id duis nisi labore. Proident cillum et reprehenderit excepteur ex nulla enim.',
  //         'categories': [
  //           'Bags',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 52.154,
  //         'priceTaxIncl': 57.37,
  //         'taxRate': 10,
  //         'comparedPrice': 59.90,
  //         'quantity': 58,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '10',
  //         'name': 'Brown Shoes',
  //         'handle': 'brown-shoes',
  //         'description': 'Proident do sunt dolor tempor aliquip adipisicing dolor reprehenderit officia proident. Culpa non reprehenderit velit anim consequat velit elit eu culpa quis incididunt id. Eu incididunt exercitation nostrud est mollit officia. Laboris deserunt dolore sit occaecat exercitation quis sunt sunt nisi commodo.',
  //         'categories': [
  //           'Shoes',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 62.18,
  //         'priceTaxIncl': 68.40,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 125,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '11',
  //         'name': 'Brown Shoes',
  //         'handle': 'brown-shoes',
  //         'description': 'Aute do cupidatat amet excepteur. Adipisicing est exercitation ullamco velit pariatur ex id laborum ex consectetur velit et eiusmod. Do laborum commodo veniam adipisicing aute cillum. Adipisicing est minim voluptate aliqua nostrud.',
  //         'categories': [
  //           'Shoes',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 48.727,
  //         'priceTaxIncl': 53.60,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 27,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '12',
  //         'name': 'Night Dress',
  //         'handle': 'night-dress',
  //         'description': 'Ex culpa et enim aute labore deserunt. Culpa occaecat nostrud culpa elit Lorem deserunt qui nulla ea elit veniam ea. Qui ullamco ullamco minim esse excepteur magna aliquip Lorem tempor ut aliqua sunt ad. Lorem minim tempor aliqua in in. In nisi esse ea eiusmod consequat sint.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 9.309,
  //         'priceTaxIncl': 10.24,
  //         'taxRate': 10,
  //         'comparedPrice': 19.90,
  //         'quantity': 188,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '13',
  //         'name': 'Red Hoodie',
  //         'handle': 'red-hoodie',
  //         'description': 'Aliquip cillum qui in consectetur ullamco ipsum ea esse eu non nostrud cillum velit minim. Deserunt est do non mollit incididunt enim non consectetur dolore ullamco do ad enim aliqua. Velit ipsum duis sunt sint dolore reprehenderit aute sint sunt esse laborum.',
  //         'categories': [
  //           'Hoodies',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 22.381,
  //         'priceTaxIncl': 24.62,
  //         'taxRate': 10,
  //         'comparedPrice': 29.90,
  //         'quantity': 147,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': false
  //       },
  //       {
  //         'id': '14',
  //         'name': 'Red Hoodie',
  //         'handle': 'red-hoodie',
  //         'description': 'Proident excepteur consectetur elit eiusmod ipsum in pariatur voluptate laborum ex ullamco. Nisi cupidatat officia veniam eiusmod enim do aute labore dolor in nostrud sunt pariatur ex. Dolore elit non excepteur sint proident aliqua in aliquip irure elit.',
  //         'categories': [
  //           'Hoodies',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 44.809,
  //         'priceTaxIncl': 49.29,
  //         'taxRate': 10,
  //         'comparedPrice': 59.90,
  //         'quantity': 21,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': false
  //       },
  //       {
  //         'id': '15',
  //         'name': 'Summer Dress',
  //         'handle': 'summer-dress',
  //         'description': 'Exercitation consectetur eiusmod nisi aliqua adipisicing nisi sit eiusmod. Quis ex est in cillum sit consequat ut mollit excepteur ipsum. Culpa Lorem magna cillum qui tempor nisi eiusmod occaecat veniam eiusmod officia culpa. Incididunt est nulla incididunt quis dolore duis id laborum magna veniam velit amet nostrud. Ad deserunt velit dolor irure exercitation reprehenderit nisi occaecat officia anim. Minim eiusmod aliquip eu do ipsum excepteur in reprehenderit voluptate laborum ullamco anim.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 62.827,
  //         'priceTaxIncl': 69.11,
  //         'taxRate': 10,
  //         'comparedPrice': 79.90,
  //         'quantity': 10,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '16',
  //         'name': 'Red Hoodie',
  //         'handle': 'red-hoodie',
  //         'description': 'Deserunt exercitation Lorem est tempor. Elit magna irure dolore pariatur culpa elit labore laborum anim ad excepteur esse. Irure qui proident irure elit exercitation qui cupidatat mollit in excepteur nulla. Laboris exercitation culpa irure non ea in incididunt est. Dolor ipsum proident esse ea ipsum culpa nulla officia ad ipsum excepteur. Commodo veniam cillum non eu anim exercitation.',
  //         'categories': [
  //           'Hoodies',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 9.309,
  //         'priceTaxIncl': 10.24,
  //         'taxRate': 10,
  //         'comparedPrice': 19.90,
  //         'quantity': 68,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '17',
  //         'name': 'Printed Dress',
  //         'handle': 'printed-dress',
  //         'description': 'Labore adipisicing exercitation velit minim nostrud excepteur eu esse. Dolor ullamco exercitation consequat cupidatat amet qui occaecat anim pariatur aute anim enim aute fugiat. Enim sint eiusmod amet nulla consequat aute culpa elit. Laborum laboris duis do quis do dolor incididunt id culpa laborum non est. Commodo ullamco labore duis occaecat est pariatur voluptate occaecat et voluptate occaecat sit.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 53.963,
  //         'priceTaxIncl': 59.36,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 66,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': false
  //       },
  //       {
  //         'id': '18',
  //         'name': 'Blouse',
  //         'handle': 'blouse',
  //         'description': 'Id dolor sunt deserunt adipisicing nostrud sit enim magna. Eu ut ea qui ullamco aute. Elit do non anim labore culpa aliquip eu ullamco magna aliqua culpa velit. Culpa nisi laboris cupidatat ea in officia est ex.',
  //         'categories': [
  //           'Dresses',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 58.372,
  //         'priceTaxIncl': 64.21,
  //         'taxRate': 10,
  //         'comparedPrice': 69.90,
  //         'quantity': 60,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '19',
  //         'name': 'Leather Belt',
  //         'handle': 'leather-belt',
  //         'description': 'Enim adipisicing commodo laboris voluptate minim officia irure aliqua exercitation ad. Laboris in elit culpa aute aliquip ex fugiat enim labore. Ut commodo magna dolore dolore officia exercitation non enim id. Est proident enim incididunt consectetur consequat magna consequat esse veniam ea cillum laboris fugiat incididunt.',
  //         'categories': [
  //           'Belts',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 63.390,
  //         'priceTaxIncl': 69.73,
  //         'taxRate': 10,
  //         'comparedPrice': 79.90,
  //         'quantity': 78,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       },
  //       {
  //         'id': '20',
  //         'name': 'Leather Belt',
  //         'handle': 'leather-belt',
  //         'description': 'Id et id ad consequat non exercitation laboris enim. Cillum nulla nulla elit ipsum in aliquip culpa fugiat est nulla id adipisicing et. Occaecat aliqua esse dolor aliquip veniam ad amet nisi ipsum. Et aliquip culpa adipisicing Lorem ipsum aute non dolor eu deserunt ex consequat.',
  //         'categories': [
  //           'Belts',
  //           'Women'
  //         ],
  //         'tags': [
  //           'dress',
  //           'printed'
  //         ],
  //         'images': [
  //           {
  //             'id': 1,
  //             'url': 'assets/images/ecommerce/product-image-placeholder.png',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 2,
  //             'url': 'assets/images/etc/air-balloons.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 3,
  //             'url': 'assets/images/etc/avenue.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 4,
  //             'url': 'assets/images/etc/cactus.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 5,
  //             'url': 'assets/images/etc/early-sunrise.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 6,
  //             'url': 'assets/images/etc/mountain-lake.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 7,
  //             'url': 'assets/images/etc/road-trip.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 8,
  //             'url': 'assets/images/etc/snow.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 9,
  //             'url': 'assets/images/etc/tropical-beach.jpg',
  //             'type': 'image'
  //           },
  //           {
  //             'id': 10,
  //             'url': 'assets/images/etc/mountain-sunset.jpg',
  //             'type': 'image'
  //           }
  //         ],
  //         'priceTaxExcl': 52.154,
  //         'priceTaxIncl': 57.37,
  //         'taxRate': 10,
  //         'comparedPrice': 59.90,
  //         'quantity': 2,
  //         'sku': 'A445BV',
  //         'width': '22cm',
  //         'height': '24cm',
  //         'depth': '15cm',
  //         'weight': '3kg',
  //         'extraShippingFee': 3.00,
  //         'active': true
  //       }
  //     ];
  //     this.onProductsChanged.next(this.products);
  //     resolve(this.products);
  //     // this.http.get('api/e-commerce-products')
  //     //     .subscribe((response: any) => {
  //     //         this.products = response;
  //     //         this.onProductsChanged.next(this.products);
  //     //         resolve(response);
  //     //     }, reject);
  //   });
  // }
}
