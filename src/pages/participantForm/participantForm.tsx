import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { saveDataToLocalStorage } from '../../uitls/offline';

function inputIsAllNumeric(text: string): boolean {
    const numericRegex = /^[0-9]+$/;
    return numericRegex.test(text);
}

function lengthIsinRange(text: string): boolean {
    return text.length === 4;
}

export default function ParticipantForm(props:{
    setUserBirth: (birth:string)=>void
    setUserAge: (age:string)=>void
    setUserDegree: (degree:string)=>void
}) {
    const navigate = useNavigate();
    const [promptUserBirth, setPromptUserBirth] = useState("XXXX");
    const [promptUserAge, setPromptUserAge] = useState("XXXX");
    const [promptUserDegree, setPromptUserDegree] = useState("XXXX");

    function calculateAge(userBirth: string){
      let dob = +new Date(userBirth);
      let calAge = ((Date.now() - dob) / 31557600000); // really don't know why it has to divide by 31557600000 but it's working
      return Math.round(calAge).toString();
    }

    return (
      <div className="h-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              กรุณากรอกข้อมูล
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" >
              <div>
                <label htmlFor="userBirth" className="block text-sm font-medium leading-6 text-gray-900">
                  วันเดือนปีเกิด
                </label>
                <div className="mt-2">
                  <input onChange={
                    (e) => {
                      setPromptUserBirth(e.target.value);
                      const age = calculateAge(e.target.value);
                      setPromptUserAge(age);
                    }
                  }
                    id="userBirth"
                    name="userBirth"
                    type="date"
                    min="1900-12-31"
                    max="1999-12-31"
                    autoComplete="userBirth"
                    required
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="userDegree" className="block text-sm font-medium leading-6 text-gray-900">
                  ระดับการศึกษาสูงสุด
                </label>
                <div className="mt-2">
                  <select onChange={
                    (e) => {setPromptUserDegree(e.target.value);}
                  }
                    className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6">
                    <option defaultValue="">โปรดเลือกระดับการศึกษาสูงสุดของท่าน</option>
                    <option value="-6">ต่ำกว่าระดับประถมศึกษาตอนปลาย</option>
                    <option value="6">ระดับประถมศึกษาตอนปลาย</option>
                    <option value="9">ระดับมัธยมศึกษาตอนต้น</option>
                    <option value="12">ระดับมัธยมศึกษาตอนปลาย หรือระดับประกาศนียบัตรวิชาชีพ (ปวช.)</option>
                    <option value="14">ระดับอนุปริญญา หรือระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)</option>
                    <option value="16">ระดับปริญญาตรี</option>
                    <option value="16+">เทียบเท่า หรือสูงกว่าระดับปริญญาโท </option>
                  </select>
                </div>
              </div>
  
              <div>
                <button onClick={()=>{
                  if (promptUserBirth === 'XXXX' && promptUserDegree === 'XXXX'){
                    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
                  } else if (promptUserBirth === 'XXXX'){
                    alert("กรุณากรอกข้อมูลวันเดือนปีเกิด");
                  } else if (promptUserDegree === 'XXXX'){
                    alert("กรุณาเลือกระดับการศึกษาสูงสุด");
                  } else {
                    props.setUserBirth(promptUserBirth);
                    props.setUserAge(promptUserAge);
                    props.setUserDegree(promptUserDegree);
                    navigate("/landing");
                    saveDataToLocalStorage('userBirth', promptUserBirth);
                    saveDataToLocalStorage('userAge', promptUserAge);
                    saveDataToLocalStorage('userDegree', promptUserDegree);
                  }
                }}
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  เข้าร่วมการทดสอบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  