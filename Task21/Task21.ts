interface StudentInfo {
    std_name: string;
    age: number;
    address: string;
    courses: string[];
  }
  
let student_info: StudentInfo[] = [{
    std_name: "Muhammad Mustafeez",
    age: 32,
    address: "Peshawar",
    courses: ["Physics", "bio", "Chemistry"],
  },
  {
    std_name: "Muhammad Mustafeez",
    age: 32,
    address: "Peshawar",
    courses: ["Networking", "Information Technology", "computer"],
  }];
  //Accessing First student information.
  console.log(student_info[0].courses);
  //Accessing Second student information.
  console.log(student_info[1].courses);