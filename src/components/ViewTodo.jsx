import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewTodo = () => {
    const [todos,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
          (response)=>{
              changeData(response.data)
          }
        ).catch().finally()
    }

    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {todos.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th scope="row">{value.userId}</th>
                                    <td>{value.id}</td>
                                    <td>{value.title}</td>
                                   
                                </tr>
                                }
                               )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo