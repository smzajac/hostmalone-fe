import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };


class Posty extends React.Component{

    state={
        posts: ""
      }

    componentWillMount(){
        fetch("http://ec2-18-216-89-14.us-east-2.compute.amazonaws.com/posts")
        .then(res => res.json())
        .then(
          (result) => {
              console.log("RESULT " ,result)
            this.setState({
              posts: result
            });
          },
          (error) => console.log(error)
        )
          }

    render(){

        console.log(this.state)
        const {classes} = this.props;
        const { posts } = this.state;
        return(
            <div>
                {posts ? <div>
                    {
                posts.map((post) => {
                return (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="primary">
                            {post.body}
                        </Typography>
                    </CardContent>
                </Card>
                         )
                    })}
                    </div>:<div></div> }
            
            </div>
        )
    }
}

export default withStyles(styles)(Posty);