import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    toggleContainer: {
        display: 'flex',
        alignItems: 'center',
      },
  });

  const Container = styled.div`
  width: 90%;
`

  const Post = styled.div`
      display: flex;
   flex-direction: row-reverse;
   margin-bottom: 20px;
  `

class Input extends React.Component{
    state = {
        post: '',
        alignment: 'Boast',
    }

    postMalone = () => {
        // console.log("Post: ", this.state.post)
        // console.log("Alignment: ", this.state.alignment)
    try{
       fetch("http://ec2-18-216-89-14.us-east-2.compute.amazonaws.com/posts", {
           method: "POST",
           mode: "cors",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
                type: this.state.alignment,
                body: this.state.post,
                author: "Anonymous" 
           })
       })
       this.setState({post: ""})
    } catch(error){
        console.log(error)
        }
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value})
   }

   handleAlignment = (event, alignment) => this.setState({ alignment });

    render(){
        const {classes} = this.props;
        const {alignment} = this.state;
        return(
            <Container>
            <TextField
            id="outlined-multiline-flexible"
            // label="Roast or Boast"
            placeholder="Roast or Boast"
            multiline
            rows="3"
            value={this.state.post}
            onChange={this.handleChange('post')}
            // onClick={() => console.log("clicked")}
            margin="normal"
            // helperText="hello"
            // style={{ margin: 25 }}
            fullWidth
            // variant="outlined"
            variant="filled"
          />
          <Post>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => this.postMalone()}>
                Post
            </Button>
            <div className={classes.toggleContainer}>
            <ToggleButtonGroup value={alignment} exclusive onChange={this.handleAlignment}>
              <ToggleButton value="Boast">
                Boast
              </ToggleButton>
              <ToggleButton value="Roast">
                Roast
              </ToggleButton>
            </ToggleButtonGroup>
            </div>
          </Post>
        </Container>
        )
    }
}

export default withStyles(styles)(Input);