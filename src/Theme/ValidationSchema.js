import * as Yup from 'yup';

export const login = Yup.object().shape({
  mobile: Yup.string()
    .required('The mobile number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
});

export const Otp = Yup.object().shape({
  mobile: Yup.string().notRequired(),
  otp: Yup.string()
    .length(6, 'Please enter a valid OTP')
    .required('Please enter a OTP'),
});

export const signup = Yup.object().shape({
  fullname: Yup.string().required('The full name field is required'),
  password: Yup.string()
    .required(
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    )
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[^\w]/, 'Password requires a symbol')
    .min(8, 'Password must be 8 characters long'),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Both password need to be the same',
  ),
});

export const contact = Yup.object().shape({
  CountryID: Yup.number().notRequired(),
  sameAadhar: Yup.number().notRequired(),
  StateID: Yup.number().when('CountryID', {
    is: val => val && val == 1,
    then: () =>
      Yup.number().when('sameAadhar', {
        is: val => val == 0,
        then: () => Yup.number().required('The state is not selected'),
        otherwise: () => Yup.number().notRequired(),
      }),
    otherwise: () => Yup.number().notRequired(),
  }),
  City: Yup.string().when('CountryID', {
    is: val => val && val == 1,
    then: () =>
      Yup.string().when('sameAadhar', {
        is: val => val == 0,
        then: () => Yup.string().required('The city is not selected'),
        otherwise: () => Yup.string().notRequired(),
      }),
    otherwise: () => Yup.string().notRequired(),
  }),
  Pincode: Yup.number().when('CountryID', {
    is: val => val && val == 1,
    then: () =>
      Yup.number().when('sameAadhar', {
        is: val => val == 0,
        then: () => Yup.number().required('The pincode number is required'),
        otherwise: () => Yup.number().notRequired(),
      }),
    otherwise: () => Yup.number().notRequired(),
  }),
  AddressLine1: Yup.string().when('CountryID', {
    is: val => val && val == 1,
    then: () =>
      Yup.string().when('sameAadhar', {
        is: val => val == 0,
        then: () => Yup.string().required('The address is required'),
        otherwise: () => Yup.string().notRequired(),
      }),
    otherwise: () => Yup.string().notRequired(),
  }),
  AddressLine2: Yup.string().when('CountryID', {
    is: val => val == 0,
    then: () => Yup.string().required('The address is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  NationalityID: Yup.number().notRequired(),
  SameAsAddress: Yup.number().notRequired(),
  TypeID: Yup.number().notRequired(),
});

export const emailFrom = Yup.object().shape({
  name: Yup.string().required('The Name field is required.'),
  email_Id: Yup.string()
    .required('The Email field is required.')
    .email('The email field must be a valid email'),
  mobile: Yup.string().required('The Mobile field is required.'),
  subject: Yup.string().when('otpsend', {
    is: v => typeof v == 'string' && v == 'verify',
    then: () => Yup.string().required('The Subject field is required.'),
    otherwise: () => Yup.string().notRequired(''),
  }),
  description: Yup.string().notRequired(),
  file_name: Yup.string().notRequired(),
  base64String: Yup.string().notRequired(),
  otpsend: Yup.string().notRequired(),
  otp: Yup.string().when('otpsend', {
    is: v => typeof v === 'string' && v.length == 4,
    then: () => Yup.string().required('The OTP field is required.'),
    otherwise: () => Yup.string().notRequired(''),
  }),
});

export const basicDetails = Yup.object().shape({
  IsGraduation: Yup.number().notRequired(),
  GraduationPercentage: Yup.number().when('IsGraduation', {
    is: val => val && val == 1,
    then: () => Yup.number().required('The percentage field is required.'),
    otherwise: () => Yup.number().notRequired(),
  }),
  GraduationPassYear: Yup.number().when('IsGraduation', {
    is: val => val && val == 1,
    then: () => Yup.number().required('Passing year is required.'),
    otherwise: () => Yup.number().notRequired(),
  }),
  FirstName: Yup.string().notRequired(''),
  MiddleName: Yup.string().notRequired(''),
  LastName: Yup.string().required('The last name field is required'),
  Mobile: Yup.string().notRequired(''),
  Email: Yup.string()
    .email('The email field must be a valid email')
    .required('The email address is required'),
  DOB: Yup.string().required('The DOB field is required'),
  Gender: Yup.number().required('The gender selection is required'),

  AddressLine1: Yup.string().notRequired('The gender selection is required'),
  StateID: Yup.number().notRequired('The gender selection is required'),
  City: Yup.string().notRequired('The gender selection is required'),
  Pincode: Yup.number().notRequired('The gender selection is required'),
  Nationality: Yup.string().notRequired('The gender selection is required'),
});

export const education = Yup.object().shape({
  education: Yup.string().required(),
  educationId: Yup.number().required(),

  university: Yup.string().when('educationId', {
    is: val => val && val != 11 && val != 7,
    then: () => Yup.string().required('The education field is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  universityId: Yup.number().notRequired(),

  college: Yup.string().when('educationId', {
    is: val => val && (val == 1 || val == 8),
    then: () => Yup.string().required('The college field is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  collegeId: Yup.number().notRequired(),

  degree: Yup.string().when('educationId', {
    is: val => val && (val == 1 || val == 8),
    then: () => Yup.string().required('The degree field is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  degreeId: Yup.number().notRequired(),

  specialization: Yup.string().when('educationId', {
    is: val => val && (val == 1 || val == 8),
    then: () =>
      Yup.string().required('The specialization field is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  specializationId: Yup.number().notRequired(),

  educationType: Yup.string().when('educationId', {
    is: val => val && (val == 1 || val == 8),
    then: () => Yup.string().required('The education type is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),

  percentage: Yup.string()
    .required('The percentage field is required')
    .matches(/^(\d*\.{0,1}\d{0,2}$)/, {
      message: 'The percentage field must be a valid percentage',
    }),

  month: Yup.string().required('The month is not selected'),
  year: Yup.number()
    .required('The year field is required')
    .min(4, 'Enter a valied year'),

  IsCAFinal: Yup.string().when('educationId', {
    is: val => val && val == 7,
    then: () => Yup.string().required('Qualification is not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  HasAttempts: Yup.string().when('IsCAFinal', {
    is: val => val && val == '1',
    then: () => Yup.string().required('Your Attempts are not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  NoOfAttempts: Yup.string().when('HasAttempts', {
    is: val => val && val == '1',
    then: () => Yup.string().required('number of attempts are not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  Grp2Month: Yup.string().when('educationId', {
    is: val => val && val == 7,
    then: () => Yup.string().required('The month of group 2 are not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  Grp2Year: Yup.number().when('educationId', {
    is: val => val && val == 7,
    then: () => Yup.number().required('The year of group 2 are not selected'),
    otherwise: () => Yup.number().notRequired(),
  }),
  CAGrp2Percentage: Yup.number().when('educationId', {
    is: val => val && val == 7,
    then: () =>
      Yup.number().required('The Group2 Percentage field is required'),
    otherwise: () => Yup.number().notRequired(),
  }),
  IsCARankHolder: Yup.string().when(['educationId', 'IsCAFinal'], {
    is: (val, jval) => val && val == 7 && jval == '1',
    then: () => Yup.string().required('Select Rank Holder'),
    otherwise: () => Yup.string().notRequired(),
  }),
});

export const experience = Yup.object().shape({
  Organization: Yup.string().required('The company name is required'),
  IndustryType: Yup.number().notRequired('The industry type is required'),
  IndustryID: Yup.number().required('The industry name is required'),
  PlaceWork: Yup.string().required('The work place is required.'),
  CTCPerMonth: Yup.string()
    .required('The annual CTC is required')
    // .matches(/^[0-9]+$/, 'Must be only digits')
    // .min(6, 'Must be upto 5 digits')
    .max(9, 'Must be less than 7 digits'),
  EmploymentTypeID: Yup.number().required(
    'The employment type is not selected',
  ),
  Currency: Yup.string().notRequired(), //.required('The currenct is not selected'),
  CountryID: Yup.number().required('The country is not selected'),
  CompaniesRoleInfo: Yup.array().of(
    Yup.object().shape({
      Designation: Yup.string().required('The designation is required'),
      DesignationID: Yup.string().notRequired(),
      FromDate: Yup.string().required('The from date is required'),
      ToDate: Yup.string().when('isCurrentEmp', {
        is: val => val == 0,
        then: () => Yup.string().required('The to date is required'),
        otherwise: () => Yup.string().notRequired(),
      }),
      isCurrentEmp: Yup.string().notRequired(),
    }),
  ),
});

export const emergency = Yup.object().shape({
  IsPrimaryContact: Yup.bool().notRequired(),
  Name: Yup.string().required('The name field is required'),
  Relationship: Yup.string().required('The rela field is required'),
  RelationshipType: Yup.string().notRequired(),
  ContactNo: Yup.number().required('The phone number field is required'),
  Country: Yup.string().notRequired(),
  CountryID: Yup.number().required('The country field is required'),
  State: Yup.string().notRequired(),
  StateID: Yup.number().required('The state field is required'),
  City: Yup.string().notRequired(),
  CityID: Yup.number().required('The city field is required'),
  PostalCode: Yup.number().required('The pincode field is required'),
  Address: Yup.string().required('The address field is required'),
});

export const dependent = Yup.object().shape({
  SalutationID: Yup.number().required('The Title is not selected'),
  FirstName: Yup.string().required('The first name field is required'),
  Middlename: Yup.string().required('The middle name field is required'),
  LastName: Yup.string().required('The last name field is required'),
  GenderID: Yup.number().required('The gender is not selected'),
  BirthDate: Yup.string().required('The Date of Birth is not selected'),
  RelationshipType: Yup.number().required('The relationship is not selected'),
  OccupationID: Yup.number().notRequired(),
});

export const declaration = Yup.object().shape({
  AppliedPanNo: Yup.number().notRequired(),
  PanNo: Yup.string().when('AppliedPanNo', {
    is: val => val === 0,
    then: () =>
      Yup.string()
        .required('The pan number field is required')
        .matches(
          /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
          'The pan number field must be a valid pan number',
        ),
    otherwise: () => Yup.string().notRequired(),
  }),
  WhatsAppNo: Yup.number().notRequired(),
  DeclarationAddress: Yup.string().required(
    'The declaration address field is required',
  ),
});

export const otherDetail = Yup.object().shape({
  Height: Yup.number().required('The height field is required'),
  Weight: Yup.number().required('The weight field is required'),
  IdMark: Yup.string().required('The identification mark is required'),
  Allergy: Yup.string().required('The allergy field is required'),
  // CastCategoryID
  CategoryID: Yup.number().required('The category field is required'),

  // BloodgroupID
  BloodGroupID: Yup.string().required('The blood group field is required'),
});

export const summaryDetails = Yup.object().shape({
  isFresher: Yup.number().notRequired(),
  hstate: Yup.string().required('The home state field is not selected'),
  hstateId: Yup.number().required('The home state field is not selected'),
  cstate: Yup.string().required('The current state field is not selected'),
  cstateId: Yup.number().required('The current state field is not selected'),
  tenYear: Yup.number().required('The year of 10th field is required'),
  twYear: Yup.number().required('The year of 12th field is required'),
  graduationTime: Yup.string().required(
    'The period of geaduation field is not selected',
  ),
  graduationTimeId: Yup.number().required(
    'The period of geaduation field is not selected',
  ),
  graduationYear: Yup.number().required('The year of graduation is required'),
  pastGraduationTime: Yup.string().notRequired(),
  pastGraduationTimeId: Yup.number().notRequired(),
  pastGraduationYear: Yup.number().notRequired(),
  experience: Yup.string().when('isFresher', {
    is: val => val && val === 1,
    then: () => Yup.string().notRequired(),
    otherwise: () => Yup.string().required('The experience field is required'),
  }),
  // .required('The experience field is required'),
  grade: Yup.string().when('isFresher', {
    is: val => val && val === 1,
    then: () => Yup.string().notRequired(),
    otherwise: () => Yup.string().required('The grade field is required'),
  }),
  // .required('The experience field is required'),,
  industry: Yup.number().when('isFresher', {
    is: val => val && val === 1,
    then: () => Yup.string().notRequired(),
    otherwise: () => Yup.string().required('The industry type is required'),
  }),
  industryId: Yup.number().when('isFresher', {
    is: val => val && val === 1,
    then: () => Yup.string().notRequired(),
    otherwise: () => Yup.string().required('This is required'),
  }),
});

export const declarationForm = Yup.object().shape({
  //q1
  IsRelativeWorking: Yup.number().notRequired(),
  RelativeRelationWorkingInIcici: Yup.string().notRequired(),
  RelativeNameWorkingInIcici: Yup.string().when('IsRelativeWorking', {
    is: val => val && val === 1,
    then: () =>
      Yup.string()
        .required('The Name field is required')
        .min(3, 'Please enter valid name.'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q2
  ExtIsRelativeWorkRcrt: Yup.number().notRequired(),
  ExtRelativeInICICIRcrt: Yup.string().notRequired(),
  ExtRelIciciRcrt: Yup.string().when('ExtIsRelativeWorkRcrt', {
    is: val => val && val === 1,
    then: () =>
      Yup.string()
        .required('The Name field is required')
        .min(3, 'Please enter valid name.'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q3
  IsInterviewedByICICI: Yup.number().notRequired(),
  IsInterviewedByICICIText: Yup.number().notRequired(),
  // IsInterviewedByICICIText: Yup.string().when('IsInterviewedByICICI', {
  //   is: val => val && val === 1,
  //   then: () => Yup.string().required('This field is required'),
  //   otherwise: () => Yup.string().notRequired(),
  // }),

  //q4
  IsEmployedByIcici: Yup.number().notRequired(),
  IsEmployedByIciciTextone: Yup.string().when('IsEmployedByIcici', {
    is: val => val && val === 1,
    then: () => Yup.string().required('The Company name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  IsEmployedByIciciText: Yup.string().when('IsEmployedByIcici', {
    is: val => val && val === 1,
    then: () => Yup.string().required('The Employee id is required'),
    otherwise: () => Yup.string().notRequired(),
  }), //IT~109238
  //q5
  IsRoleAssigned13: Yup.number().notRequired(),
  // IsRoleAssigned13Initial: Yup.number().notRequired(),
  // IsRoleAssigned13: Yup.string().when('IsRoleAssigned13Initial', {
  //   is: val => val === 1,
  //   then: () => Yup.string().required('This field is required'),
  //   otherwise: () => Yup.string().notRequired(),
  // }),
  //q6
  IsCasePending: Yup.number().notRequired(),
  CasePendingDetails: Yup.string().when('IsCasePending', {
    is: val => val === 1,
    then: () => Yup.string().required('This field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q7
  IsPreviousPendingCase: Yup.number().notRequired(),
  PreviousPendingCaseDetails: Yup.string().when('IsPreviousPendingCase', {
    is: val => val === 1,
    then: () => Yup.string().required('This field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q8
  IsAnyRelativeDirector: Yup.number().notRequired(),
  RelativeDirectorName: Yup.string().when('IsAnyRelativeDirector', {
    is: val => val === 1,
    then: () => Yup.string().required("The director's name is required"),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q9
  IsClearedCaExam: Yup.number().notRequired(),
  CaClearedYear: Yup.string().when('IsClearedCaExam', {
    is: val => val === 1,
    then: () => Yup.string().required('Month field not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),
  CaClearedMonth: Yup.string().when('IsClearedCaExam', {
    is: val => val === 1,
    then: () => Yup.string().required('Year field not selected'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q10
  isCARankHolder: Yup.number().notRequired(),
  CARankNumber: Yup.number().when('isCARankHolder', {
    is: val => val === 1,
    then: () => Yup.number().required('The rank field is required'),
    otherwise: () => Yup.number().notRequired(),
  }),

  //q11
  ExtIsBacklogPO: Yup.number().notRequired(),
  ExtInstituteNamePO: Yup.string().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () =>
      Yup.string().required('The institute/college name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  ExtEduPassingYearPO: Yup.string().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () => Yup.string().required('The year field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  backLogDetails: Yup.array().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () =>
      Yup.array().of(
        Yup.object().shape({
          BackLogStatus: Yup.string().required(
            'The backlog status is required',
          ),
          semester: Yup.string().required('The semester field is required'),
          subject: Yup.string().required('The subject field is required'),
        }),
      ),
    otherwise: () => Yup.array().notRequired(),
  }),

  //q12
  IsAnyCommunicable: Yup.number().notRequired(),
  CommunicableDetails: Yup.string().when('IsAnyCommunicable', {
    is: val => val === 1,
    then: () => Yup.string().required('This field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),

  //q13
  ExtIsBGVerification: Yup.number().notRequired(),
});

export const btcForm = Yup.object().shape({
  btc_campus: Yup.string().required('The campus field is not selected'),
  btc_batchof: Yup.string().required('The year field is not selected'),
  // btc_firstname: Yup.string().required('The first name field is required'),
  // btc_lastname: Yup.string().required('The last name field is required'),
  btc_firstname: Yup.string()
    .required('The first name field is required')
    .matches(/^[A-a][a-zA-Z ]*$/, 'The entered first name is invalid'),
  btc_lastname: Yup.string()
    .required('The last name field is required')
    .matches(/^[A-a][a-zA-Z ]*$/, 'The entered last name is invalid'),
  btc_email: Yup.string()
    .email('The email field must be a valid email')
    .required('The email address is required'),
  btc_mobilenumber: Yup.string().required(
    'The mobile number field is required',
  ),
  btc_rollnumber: Yup.string()
    .required('The roll number field is required')
    .matches(/^[a-zA-Z0-9]*$/, 'The entered roll number is invalid'),
  btc_gender: Yup.string().required('The gender field is not selected'),
});

export const campusForm = Yup.object().shape({
  InstituteName: Yup.string().required('The Institute Name field is required.'),
  InstituteID: Yup.number().required('The Institute Name field is required.'),
  // campusDegree: Yup.string().required('The campusName field is required.'),
  EducationID: Yup.number().required('The Education Name field is required.'),
  IsInternship: Yup.number().required('The IsInternship field is required.'),
});

export const campusEducation = Yup.object().shape({
  InstituteName: Yup.string().required('Field Required'),
  InstituteID: Yup.string().required('Field Required'),
  EducationID: Yup.string().required('Field Required'),
  // IsInternship:Yup.string().notRequired(),
  college: Yup.string().notRequired(),
  collegeId: Yup.string().notRequired(),
  degree: Yup.string().notRequired(),
  degreeId: Yup.string().notRequired(),
  degreePercentage: Yup.string().notRequired(),
  degreeMonth: Yup.string().notRequired(),
  degreeYear: Yup.string().notRequired(),

  TenthBoard: Yup.string().notRequired(),
  TenthMonth: Yup.string().notRequired(),
  TenthYear: Yup.string().notRequired(),
  TenthPercentage: Yup.string().notRequired(),
  TwlthBoard: Yup.string().notRequired(),
  TwlthMonth: Yup.string().notRequired(),
  TwlthYear: Yup.string().notRequired(),
  TwlthPercentage: Yup.string().notRequired(),

  Specialization: Yup.string().required('This field is required.'),
  Specialization2: Yup.string().required('This field is required.'),
  // EntranceExam: Yup.string().required('This field is required.'),
  // EntranceExamID: Yup.string().required('This field is required.'),
  // EntranceExamScoreType: Yup.string().required('This field is required.'),
  // ExamScore: Yup.string().required('This field is required.'),
  Percentage: Yup.string().required('This field is required.'),
});

export const campusWorkExp = Yup.object().shape({
  IsInternship: Yup.string().notRequired('This field is required.'),
  IsFresher: Yup.number().notRequired('This field is required.'),

  Organization: Yup.string().when('IsFresher', {
    is: val => val && val === 0,
    then: () => Yup.string().required('The Name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  IndustryID: Yup.number().when('IsFresher', {
    is: val => val && val === 0,
    then: () => Yup.number().required('The Name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  MonthOfExp: Yup.number().when('IsFresher', {
    is: val => val && val === 0,
    then: () => Yup.number().required('The Name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  YearOfExp: Yup.number().when('IsFresher', {
    is: val => val && val === 0,
    then: () => Yup.number().required('The Name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),

  IsRelativeWorking: Yup.number().notRequired(),
  RelativeRelationWorkingInIcici: Yup.string().notRequired(),
  RelativeNameWorkingInIcici: Yup.string().when('IsRelativeWorking', {
    is: val => val && val === 1,
    then: () =>
      Yup.string()
        .required('The Name field is required')
        .min(3, 'Please enter valid name.'),
    otherwise: () => Yup.string().notRequired(),
  }),

  IsInterviewedByICICI: Yup.number().notRequired(),
  IsInterviewedByICICIText: Yup.number().notRequired(),

  IsEmployedByIcici: Yup.number().notRequired(),
  IsEmployedByIciciTextone: Yup.string().when('IsEmployedByIcici', {
    is: val => val && val === 1,
    then: () => Yup.string().required('The Company name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  IsEmployedByIciciText: Yup.string().when('IsEmployedByIcici', {
    is: val => val && val === 1,
    then: () => Yup.string().required('The Employee id is required'),
    otherwise: () => Yup.string().notRequired(),
  }), //IT~109238

  ExtIsBacklogPO: Yup.number().notRequired(),
  ExtInstituteNamePO: Yup.string().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () =>
      Yup.string().required('The institute/college name field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  ExtEduPassingYearPO: Yup.string().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () => Yup.string().required('The year field is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  backLogDetails: Yup.array().when('ExtIsBacklogPO', {
    is: val => val === 1,
    then: () =>
      Yup.array().of(
        Yup.object().shape({
          BackLogStatus: Yup.string().required(
            'The backlog status is required',
          ),
          semester: Yup.string().required('The semester field is required'),
          subject: Yup.string().required('The subject field is required'),
        }),
      ),
    otherwise: () => Yup.array().notRequired(),
  }),
});

export const OnlyCharacter = text => {
  let enterText = text.trim();
  enterText = enterText.replace(/\s+/g, ' '); // Removing all the extra space, it allow only one space between two words
  enterText = enterText.replace(/[^a-zA-Z ]/g, ''); // Remove all special characters

  return enterText;
};

export const OnlyCharacterWithSpace = text => {
  const trimmedInput = text.replace(/^\s+/g, ''); // remove first space
  const filteredInput = trimmedInput.replace(/[^a-zA-Z\s]/g, ''); // Allow only characters and space between words

  return filteredInput;
};

// Replace multiple spaces with a single space & remove the first space
export const OnlyOneSpaceBetweenWords = text => {
  // Replace multiple spaces with a single space
  const singleSpaceInput = text.replace(/\s+/g, ' ');

  // Remove leading space, if any
  const trimmedInput = singleSpaceInput.replace(/^\s*/, '');

  return trimmedInput;
};
export const OnlyNumber = text => {
  let enterText = text.trim(); // Remove leading and trailing spaces
  enterText = enterText.replace(/\s+/g, ' '); // Removing all the extra space, it allow only one space between two words
  enterText = enterText.replace(/[^0-9]/g, ''); // Accept only number, remove the character & spceial letter

  return enterText;
};

export const ValidateEmail = email => {
  let trimmedEmail = email.trim(); // Remove leading and trailing spaces
  trimmedEmail = trimmedEmail.replace(/\s+/g, ''); // Removing all spaces

  // Use a regular expression to check if the email contains only allowed characters
  const isValid = /^[A-Za-z0-9@]+$/.test(trimmedEmail);

  return isValid ? trimmedEmail : null; // Return the trimmed email or null if it's not valid
};
