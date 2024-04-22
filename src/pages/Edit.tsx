import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { editUser, getUser } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const FormContainer = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  > div {
    margin-top: 20px;
    padding: 5px;
  }
`;

const EditUser = () => {
  const navigate = useNavigate();

  const initialState = {
    name: '',
    username: '',
    email: '',
    phone: '',
  };

  const [user, setUser] = useState<IState>(initialState);

  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(e.type);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const getUserData = async () => {
    const response = await getUser(id);
    console.log(response);
    setUser(response?.data);
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    // await addUser(user);
    await editUser(user, id);
    navigate('/users');
  };

  return (
    <FormContainer>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => handleInputChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={handleAddUser}
        >
          Edit User
        </Button>
      </FormControl>
    </FormContainer>
  );
};

export interface IState {
  name: string;
  username: string;
  email: string;
  phone: string;
  id?: number;
}

export default EditUser;
