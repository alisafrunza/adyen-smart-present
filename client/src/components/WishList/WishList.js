import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const products = [
    {
        id: 1,
        name: "E-reader",
        url: "https://content.hwigroup.net/images/products_1200/161436/4/sony-prs-t2-red.jpg"
    },
    {
        id: 2,
        name: "Kitchen machine",
        url: "https://image.coolblue.nl/422x390/products/1171149"
    },
    {
        id: 3,
        name: "Haruki Murakami - The elephant vanishes",
        url: "https://pixel.nymag.com/imgs/daily/vulture/2018/10/05/books/elephant.w536.h804.2x.jpg"
    },
    {
        id: 4,
        name: "Shampoo",
        url: "https://img.loccitane.com/P.aspx?l=nl-NL&s=300&e=png&name=aromachologie-force-shampoo&id=17SH300D15&v=2"
    },
    {
        id: 5,
        name: "Box of chocolates",
        url: "https://cdn.shopify.com/s/files/1/1850/8009/products/12_box_very_final_2000x.jpg?v=1491021791"
    },
    {
        id: 6,
        name: "Arduino",
        url: "https://asset.conrad.com/media10/isa/160267/c1/-/nl/1465104_LB_00_FB/image.jpg?x=400&y=400"
    },
    {
        id: 7,
        name: "Noise cancelling headphones",
        url: "https://image.coolblue.nl/422x390/products/881766"
    }
]

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};


class WishList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = () => {

    }

    render() {
        return (
            <Fragment>
                {products.map(item =>
                    <Card className="wishcard">
                        <CardActionArea>
                            <Fragment>
                                <CardMedia
                                    className="picture"
                                    image={item.url}
                                    title={item.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Fragment>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Link to={`/donate`}>
                                <Button size="small" color="primary" onClick={this.handleChange()}>
                                    Donate
                            </Button>
                            </Link>
                        </CardActions>
                    </Card>)}
            </Fragment>
        );
    }
}

export default withStyles(styles)(WishList);
