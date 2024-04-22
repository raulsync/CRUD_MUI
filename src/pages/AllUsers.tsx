import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { IDataType, getUsers } from '../services/api';
import { useEffect, useState } from 'react';

const TableStyle = styled(Table)({
  width: ' 90%',
  margin: '55px auto 0 auto',
});

const Thead = styled(TableRow)`
  background: #3e3e3e;
  > th {
    color: #fff;
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  > td {
    font-size: 20px;
  }
`;

const AllUsers = () => {
  type ApiResponse = IDataType[];

  const [users, setUsers] = useState<ApiResponse | null>(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    if (response !== undefined) {
      setUsers(response?.data);
    }
  };

  return (
    <TableStyle>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>User Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile No.</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <Tbody key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          </Tbody>
        ))}
      </TableBody>
    </TableStyle>
  );
};

export default AllUsers;
