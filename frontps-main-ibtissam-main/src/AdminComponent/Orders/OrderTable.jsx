import { Avatar, AvatarGroup, Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsOrder } from '../../component/State/Restaurant Order/Action';


const OrderTable = () => {
  const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const {restaurant,restaurantOrder,ingredients,menu }=useSelector(store=>store);

    useEffect(()=>{
      dispatch(fetchRestaurantsOrder({
        jwt,
        restaurantId:restaurant.usersRestaurant?.id,
      }))
    },[])
  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
        title={"All Orders"}
        sx={{pt:2, alignItems:"center"}}
        />
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">image</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">ingredients</TableCell>
            <TableCell align="right">status</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantOrder.orders.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">
                <AvatarGroup>
                  {item.items.map((orderItem)=>(
                    <Avatar src={orderItem.food?.images[0]}/>
                  ))}
                  
                </AvatarGroup>
                </TableCell>
              <TableCell align="right">{"9osos@gmail.com"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"pizza"}</TableCell>
              <TableCell align="right">{"ingredients"}</TableCell>
              <TableCell align="right">{"completed"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </Card>

    </Box>
  )
}

export default OrderTable
