const addUser = async () => {
  const fullName = '';
  const Address = '';
  const Age = '';
  const phoneNumber = '';
  const Email = '';
  const Password = '';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authToken: 'token',
      responseType: 'json',
    },
    body: JSON.stringify({
      fullName: fullName,
      Address: Address,
      Age: Age,
      phoneNumber: phoneNumber,
      Email: Email,
      Password: Password,
    }),
  };
  const response = await fetch(
    'http://localhost:8080/api/user/register',
    options
  );
  const resData = await response.json();
  if (response.status === 200) {
    //Successful Codes
  } else {
    //error Codes
  }
};

//Call Create Function
addUser();
