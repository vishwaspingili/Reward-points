import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import moment from 'moment';

export default function ItemsList({ cartItems, setCartItems, showRewards, points, setPoints, productHistory, setProductHistory }) {
    const [date, setDate] = React.useState('');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const handleChange = (value) => {
        setDate(value);
    };

    const handleBuyNow = () => {
        const month = months[moment(date).month()]
        showRewards(true);
        let rewards = { ...points };
        if (rewards[month]) rewards[month] += calculateRewards();
        else rewards[month] = calculateRewards();
        setPoints(rewards);
        let history = {...productHistory};
        let items = cartItems.map(data => {
            data['date'] = moment(date).format('DD/MM/YYYY');
            return data;
        });
        if(!history[month]) {
            history[month] = items;
        } else {
            history[month] = [...history[month], ...items];
        }
        setProductHistory(history);
        setCartItems([]);
    }

    const calculatePrice = () => {
        let price = 0;
        cartItems.map((item) => price += item.price * item.count);
        return price
    }

    const calculateRewards = () => {
        const totalPrice = calculatePrice();
        let rewards = 0;
        if (totalPrice > 50 && totalPrice <= 100) rewards += totalPrice - 50;
        if (totalPrice > 100) {
            rewards += (totalPrice - 100) * 2 + 50
        };
        return rewards;
    }

    const handleDateChange = (date) => {
        handleChange(date)
    }

    return (
        <Container maxWidth="sm" fixed>
            {
                cartItems.length > 0 ? <div>
                    <List sx={{ width: '100%', maxWidth: 1000 }}>
                        {
                            cartItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ListItem alignItems="flex-start" style={{ width: "100%" }}>
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src={item.image} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.product}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            ${item.price}
                                                        </Typography>
                                                        {item.count > 1 &&
                                                            <Typography
                                                                sx={{ display: 'inline' }}
                                                                component="span"
                                                                variant="body2"
                                                                color="text.primary"
                                                            >
                                                                &nbsp;X&nbsp;{item.count}
                                                            </Typography>
                                                        }
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </div>
                                )
                            })
                        }
                        <br /><br />
                        {
                            <div>
                                <div>
                                    <div style={{ display: "flex", height: "2rem" }}>
                                        <h4>Total Price: </h4>&nbsp;<h3 style={{ color: "green" }}>${calculatePrice()}</h3>
                                    </div>
                                    <div style={{ display: "flex", height: "2rem" }}><h4>Reward Points: </h4>&nbsp;<h3 style={{ color: "green" }}>{calculateRewards()}</h3></div>
                                </div>
                                <div style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e) => handleDateChange(e.target.value)}
                                    />&nbsp;&nbsp;
                                    <Button disabled={!date} size="small" variant="contained" onClick={() => handleBuyNow()}>Buy</Button>
                                </div>
                            </div>
                        }
                    </List>
                </div> : <h1>No Items added</h1>
            }
        </Container>
    );
}
