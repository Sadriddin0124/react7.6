import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser, getIndex, openForAdd, search } from "../features/counter/counterSlice";
import AddUserModal from '../components/AddUserModal';

const Users = () => {
    const modalVisible = useSelector((state)=> state.counter.modalVisible)
    const dispatch = useDispatch()
    const searchResults = useSelector((state)=> state.counter.searchResults)
    useEffect(()=>{
        dispatch(search())
      },[])
      const editing = (item, index)=> {
        dispatch(editUser(item))
        dispatch(getIndex(index))
      }
  return (
    <div>
        <AddUserModal />
      <div className="row">
        <h1 className="text-danger text-center">Homework 3</h1>
        <div className="col-8 offset-2 d-flex justify-content-between align-items-center my-3">
          <input type="text" className="form-control m-2 w-25" placeholder="Search..." onChange={(e)=>dispatch(search(e.target.value))}/>
          <button className="btn btn-success" onClick={()=>dispatch(openForAdd())}>Add+</button>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                searchResults.map((item,index)=> {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <button className="btn btn-info mx-2" onClick={()=>editing(item, index)}>edit</button>
                      <button className="btn btn-danger" onClick={()=>dispatch(deleteUser(index))}>delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
