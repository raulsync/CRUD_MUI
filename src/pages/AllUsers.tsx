import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { IDataType, getUsers, deleteUser } from '../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableStyle = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const Thead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #3e3e3e;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
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

  const deleteuserDetail = async (id) => {
    await deleteUser(id);
    getAllUsers();
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
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: '5px', backgroundColor: '#21b6ae' }}
                color="secondary"
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteuserDetail(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </TableStyle>
  );
};

export default AllUsers;
