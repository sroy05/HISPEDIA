// const memberIds = ['1234567890', '1234', '1111', '2222', '3333', '4444', '5555'];
export const LoginData = (props) => {
    const { memberId } = props;
    let loginData = {};
    let loginSuccess = false;
    switch (memberId.toString()) {
        case '1234567890':
            loginData = {
                memberId: '1234567890',
                firstName: 'Peter',
                lastName: 'Edward',
                avatar: 'https://img.icons8.com/ultraviolet/40/000000/person-male.png',
                gender: 'M',
                email: 'peter.edeard@outlook.com',
                mobileNumber: '4516917890',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '1234':
            loginData = {
                memberId: '1234',
                firstName: 'Trenton',
                lastName: 'Bolt',
                avatar: 'https://img.icons8.com/windows/32/000000/person-male.png',
                gender: 'M',
                email: 'Trenton.Bolt@outlook.com',
                mobileNumber: '4516911234',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '1111':
            loginData = {
                memberId: '1111',
                firstName: 'Leona',
                lastName: 'Cruise',
                avatar: 'https://img.icons8.com/officel/80/000000/person-male.png',
                gender: 'F',
                email: 'Leona.Cruise@outlook.com',
                mobileNumber: '4516911111',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '2222':
            loginData = {
                memberId: '2222',
                firstName: 'Sara',
                lastName: 'Tessa',
                avatar: 'https://img.icons8.com/office/80/000000/user-female-circle.png',
                gender: 'F',
                email: 'Sara.Tessa@outlook.com',
                mobileNumber: '4516912222',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '3333':
            loginData = {
                memberId: '3333',
                firstName: 'Collin',
                lastName: 'Paul',
                avatar: 'https://img.icons8.com/ultraviolet/40/000000/guest-male.png',
                gender: 'M',
                email: 'Collin.Paul@outlook.com',
                mobileNumber: '4516913333',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '4444':
            loginData = {
                memberId: '4444',
                firstName: 'Leena',
                lastName: 'Trio',
                avatar: 'https://img.icons8.com/ultraviolet/40/000000/user-female-circle.png',
                gender: 'F',
                email: 'Leena.Trio@outlook.com',
                mobileNumber: '4516914444',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        case '5555':
            loginData = {
                memberId: '5555',
                firstName: 'Robert',
                lastName: 'Downey',
                avatar: 'https://img.icons8.com/color/48/000000/person-male.png',
                gender: 'M',
                email: 'Robert.Downey@outlook.com',
                mobileNumber: '4516915555',
                state: 'California',
                country: 'USA',
                city: 'San Jose'
            };
            break;
        default:
            loginData = {};
    }
    if(loginData.memberId) {
        loginSuccess = true;
    }
    const data = {
        loginData,
        loginSuccess
    }
    return data;
}