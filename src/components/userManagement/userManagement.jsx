import React,{useState,useEffect} from 'react'
import  './userManagement.css'
import TableFrame from '../../reusable/table/usertable';
import axios from 'axios';
function UserManagement() {

  useEffect(() => {
    const fetchdata = async ()=>{
        try{
           const res=await axios.get("https://jsonplaceholder.typicode.com/users")
          setData(res.data)
          console.log(res);
        }
        catch(error){
          console.log(error);
        }
    }
    fetchdata()
  }, [])
  


  const [data,setData] = useState([]);
  
  const columns = [
    {
      name: "Name  ",
      cell: (row) => (
        <div>
        
            {row?.name}
        </div>
      ),
      sortable: true,
    },
    { 
     name: "UserName ",
     selector: (row) => row?.username,
     sortable: true,     
    },
    {
      name: "Email ",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row?.phone,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row?.website,
      sortable: true,
    },
   
  ];

  return (
    <div>
      <div className='user-container'>
        <h1 className='user-heading'>User Management</h1>
        <div >
        <TableFrame className='table-container' columns={columns} recordData={data} />
        </div>
      </div>
    </div>
  )
}

export default UserManagement