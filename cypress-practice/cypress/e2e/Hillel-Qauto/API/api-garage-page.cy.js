import users from '../../../fixtures/users.json';


describe('API Tests - Garage', () => {
    let sid;
    let addedCarId;
    let carsInGarage;
    let countOfCars;
    before(() => {
        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            body: {
                "email": users.userforLogin.email,
                "password": users.userforLogin.password,
                "remember": false
            }
        }).then((response) => {
            let headers = response.headers;
            sid = headers['set-cookie'][0].split(';')[0];

        })
    })
    it('Get cars list and verify', () => {
        cy.request(
            'GET', '/api/cars/brands'
        ).then((response) => {
            let carsList = response.body.data;
            //cy.log(JSON.stringify(carsList));
            expect(response.status).to.eq(200)
            expect(carsList).to.have.length(5);
            expect(carsList[0].title).to.eq('Audi')
        })
    })
    it('Addinng car into garage and verify', () => {
        cy.request({
            method: 'POST',
            url: '/api/cars',
            body: {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            },
            headers: {
                "Cookie": sid,
            },
        }).then((response) => {

            let addedCar = response.body.data;
            addedCarId = addedCar.id
            cy.log(addedCarId)
            expect(response.status).to.eq(201);
            expect(addedCar).to.have.property('id');
            expect(addedCar.mileage).to.eq(122);
            expect(addedCar.carBrandId).to.eq(1);

        })
    })
    it('Edit info for added car and verify', () => {
        cy.request({
            method: 'PUT',
            url: `/api/cars/${addedCarId}`,
            body: {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 1232
            },
            headers: {
                "Cookie": sid
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data.mileage).to.eq(1232);
            expect(response.body.data.id).to.eq(addedCarId);
        })
    })
    it('Get added cars into Garage', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars',
            headers: { "Cookie": sid }
        }).then((response) => {
            carsInGarage = response.body.data;
            countOfCars = carsInGarage.length;
            expect(response.status).to.eq(200);
            expect(carsInGarage).to.be.an('array');
            expect(countOfCars).to.be.at.most(25);
        })
    })
    it('Delete cars from Garage', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars',
            headers: { "Cookie": sid }
        }).then((response) => {
            const cars = response.body.data;

            if (cars && Array.isArray(cars)) {
                cars.forEach(car => {
                    cy.request({
                        method: 'DELETE',
                        url: `/api/cars/${car.id}`,
                        headers: { "Cookie": sid }
                    }).its('status').should('eq', 200);
                });
            }
        });
    });
});

