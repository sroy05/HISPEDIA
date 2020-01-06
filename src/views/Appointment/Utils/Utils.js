import { hospitalProcedureDoctorsData } from '../../../assets/mocks/hospitals';

export const FetchHospitalInfo = (props={}) => {
    const { procedureName, doctorName } = props;
    const hospitalsList2 = Array.from(hospitalProcedureDoctorsData('hospitalsList'));
    const hospitalDataToReturn = [];
    let foundDoctorName = false;
    for(let i=0; i<hospitalsList2.length; i++){
        let gridItem;
        let doctorsList = [];
        if(doctorName) {
            for(let j=0;j<hospitalsList2[i].doctorsList.length; j++){
                if(hospitalsList2[i].doctorsList[j].name === doctorName) {
                    gridItem = hospitalsList2[i];
                    doctorsList.push(hospitalsList2[i].doctorsList[j]);
                    gridItem.doctorsList = doctorsList;
                    break;
                }
            }
        } else {
            doctorsList = [];
            const listOfDoctors = hospitalsList2[i].doctorsList;
            for(let j=0;j<listOfDoctors.length; j++){
                const proceduresList = listOfDoctors[j].proceduresTakeup;
                for(let l=0; l<proceduresList.length; l++){
                    if(proceduresList[l] === procedureName){
                        gridItem = hospitalsList2[i];
                        doctorsList.push(listOfDoctors[j]);
                        gridItem.doctorsList = doctorsList;
                        break;
                    }
                }
            }
        }
        if(gridItem !== undefined) {
            hospitalDataToReturn.push(gridItem);
        }
    }
    let randomVar = 0
    for(let k=hospitalDataToReturn.length; (k<5 && hospitalDataToReturn.length > 0); k++){
        hospitalDataToReturn.push(hospitalDataToReturn[randomVar]);
        randomVar++;
    }
    return hospitalDataToReturn;
}