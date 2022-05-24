import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>All Users {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <UserRow index={index} refetch={refetch} key={user._id} user={user}></UserRow>)
                        }
                      

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;