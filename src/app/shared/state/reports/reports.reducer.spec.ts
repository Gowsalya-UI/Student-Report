import * as fromReports from './reports.reducer';
import * as fromActions from './reports.action';
export const response = {
    "students": [
        {
          "studentId": 1,
          "firstName": "Krish",
          "lastName": "Lee",
          "phoneNumber": "123456",
          "age": 7,
          "emailAddress": "krish.lee@learningcontainer.com",
          "english": 89,
          "maths": 100,
          "science": 90,
          "socialStudies": 80,
          "grade": "A"
        }
        
      ]
};

describe('ReportsReducer', () => {
  describe('undefined action', () => {

    it('should return the default state', () => {
      const initialState  = {error:'',studentPassedDetailsResponse: []};
      const action = new fromActions.GetStudentsPassedDetails;
      const state = fromReports.reportReducer(undefined, action);
      expect(state).toEqual(initialState);
    });

    it('should return the success state', () => {      
        const action = new fromActions.GetStudentsPassedDetailsSuccess(response);
        const state = fromReports.reportReducer(undefined, action);
        expect(state.studentPassedDetailsResponse).toEqual(response);
      });
  });

});