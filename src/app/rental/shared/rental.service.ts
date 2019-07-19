import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';


@Injectable()
export class RentalService{
    private rentals: Rental[] = [
        {
            id:"1",
            title: "Lifestyle Gardens",
            city: "Nairobi",
            street: "Ralph Bunje",
            category: "apartment",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Luxurious apartment",
            dailyRate: 45,
            shared: false,
            createdAt: "23/03/2016"
          },
          {
            id:"2",
            title: "Timbuktu Gardens",
            city: "Nakuru",
            street: "Kadenge",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 2,
            description: "Luxurious apartment",
            dailyRate: 30,
            shared: true,
            createdAt: "23/03/2016"
          },
          {
            id:"3",
            title: "Oceanview Gardens",
            city: "Mombasa",
            street: "Madini",
            category: "condo",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 3,
            description: "Luxurious apartment",
            dailyRate: 65,
            shared: false,
            createdAt: "23/03/2016"
          },
          {
            id:"4",
            title: "Lakeside Gardens",
            city: "Kisumu",
            street: "Mega",
            category: "house",
            image: "http://via.placeholder.com/350x250",
            bedrooms: 7,
            description: "Luxurious apartment",
            dailyRate: 55,
            shared: true,
            createdAt: "23/03/2016"
          },
    ];

     public getRentalById(rentalId: string): Observable<Rental>{
        return new Observable<Rental>((observer)=> {

          setTimeout(() => {
            const foundRental = this.rentals.find((rental) => {
              return rental.id == rentalId;
            });
  
            observer.next(foundRental);
          }, 500)
        })
     }
    public getRentals(): Observable<Rental[]> {
       return new Observable <Rental[]>((observer)=>{

            setTimeout(() =>{
                observer.next(this.rentals);
            },1000);
        });
    }
}