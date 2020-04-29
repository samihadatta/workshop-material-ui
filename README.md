# CS52 Workshops: React Component Libraries

## Overview

For this workshop, we will attempt to get a nice looking sign-up page up and running as soon as possible using Material UI Components. 

## Setup


pull in your starter pack
    
    #make sure you are in your project directory
    git remote add starter git@github.com:dartmouth-cs52-20s/starterpack-your-gitub-username.git
    git pull starter master  # you may need --allow-unrelated-histories
    
    # also don't forget to run:
    yarn #to fetch all your webpack dependencies
    
In your repo

    yarn add @material-ui/core

## Create a Header component

 Let's start by creating a header!

1. In your src/ folder, create a Header.js file
2. Import the Toolbar, Button, and Typography components
    

        import { Toolbar, Button, Typography} from '@material-ui/core';
        import React from 'react';
        
3. Create a Header component

        export default function Header(props) {
          return (
            <>
              <Toolbar>
                <Button size="small">Subscribe</Button>
                <Typography
                  component="h2"
                  variant="h5"
                  color="inherit"
                  align="center"
                  noWrap

                >
                  My Blog
                </Typography>
                <Button size="small">Search</Button>
                <Button variant="outlined" size="small">
                  Sign up
                </Button>
              </Toolbar>
            </>
          );
        }
    Notice how we use Typography tags instead of p tags and how easy it is to specify different sizes and variants on the Buttons

4. Import your new Header component into your index.js file and add it to your app - it should look something like this:
    ![](https://i.imgur.com/BrK2VmG.png)
    
5. This is cool and all, but not very pretty. Let's go back and add some styling to our Header component.
6. Add Material UIs styling function:
        
        import { makeStyles } from '@material-ui/core/styles';
        
7. And then add this styling code right after your imports (outside of your Header component):

        const useStyles = makeStyles((theme) => ({
          toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          toolbarTitle: {
            flex: 1,
          },
          toolbarSecondary: {
            justifyContent: 'space-between',
            overflowX: 'auto',
          },
        }));
        
8. Inside your component, add this line:

        const classes = useStyles();
        
9. Add the classes to their respective components
    On Toolbar
    
        className={classes.toolbar}
        
    On Typography
        
        className={classes.toolbarTitle}

10. All done with the header and it should look something like this!

![](https://i.imgur.com/Y67WIbT.png)



## Now let's add a sign-up component

1. Create a new file SignIn.js
2. Add our imports

        import React from 'react';
        import {
          Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container,
        } from '@material-ui/core';

        import { makeStyles } from '@material-ui/core/styles';


3. Add these premade styles after your imports 

    ```
    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    ```

4. Create a functional component named SignIn as we did with Header. Start with this basic component:

    ```
    <Container>
        <CssBaseline />
        <div className={classes.paper}>
        
        </div>
    </Container>

5. Add this snippet into the component as we did with Header.js
```
export default function SignIn() {
  const classes = useStyles();
```


6. Next, we will add a sign-in title. We are going to use the `<Typography>` tag again here for all of our text elements

```
 
 <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
```



 
7. Next we add input boxes for email address and password. We put it into a form tag to start with, and then, we use the **TextField API.** which replaces input elements. (Add this after the `</Typography>`tag )


```
<form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
</form>
```
Components in libraries like Material-UI often include familiar behaviors for hovering, focusing and more, so you can focus on more exciting parts of your project.
![](https://i.imgur.com/VpKjMqg.png)


8. Add another Textfield for Password
    ```
    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
    ```
          
7. Now we add a form control label. This component replaces checkboxes and radio buttons
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
    Your Sign In component using Typography, TextFields and a FormControlLabel should look like this:
![](https://i.imgur.com/dJTqYNs.png)

8. Add a submit button. 

          
```
<Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
```

11. Now we add a **GRID** component for some links and the bottom of our SignIn component. Grids are a super useful component within Material UI. Grids are based on flexbox but allow even greater continuity across layours. 
    
    Here is what the bottom of your component should look like:
          
  ```            
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
```


3. One last step: Add the SignIn Component to your app! Import it and add it under your Header element. 

![](https://i.imgur.com/3boQKdO.png)


## All done!

1. If you have extra time, try messing around with the styling a bit to change font or button colors. Material UI has a lot of built in styling options (check out the docs for more info: https://material-ui.com/styles/basics/ )



## What you should have at this point
- [ ] a Header component
- [ ] a SignIn component
- [ ] inputs for Email Address/Password with cool transitions!
- [ ] a styled login page that you built with very minimal effort!

## EXTRA: How makeStyles() works

We kind of glossed over makeStyles() for the sake of brevity, but here is what is going on under the hood:

First things first, look at the toolbarSecondary object that we created in this workshop


```
toolbarSecondary: {
     justifyContent: 'space-between',
     overflowX: 'auto',
   },
```
Notice anything? Yes that is CSS hiding in our .js file! In fact, you can literally use CSS in makestyles by using [String Templates](https://material-ui.com/styles/advanced/) (Go to the link then search String Templates).

maketyles is a pretty cool "CSS-in-JS" solution meant to help you build dynamic User Interfaces. It's fast, it's lightweight and if you use it right it can make things really pretty.

When you call makeStyles() it creates a material-ui custom hook (learn more about the hook API [here](https://https://www.nearform.com/blog/forget-everything-you-learned-about-react-hooks-rock/) ) and assigns it to `useStyles`. We can now call useStyles and assign it to `classes` which is now, a style object which we can index into and even create nested objects! For instance:

```
const useStyles = makeStyles({
  root: {
    color: 'red',
    '& p': {
      margin: 0,
      color: 'green',
      '& span': {
        color: 'blue',
      },
    },
  },
});
```

Now, we can make a general style structure which will work for any tag of type span, p or root!

```
export default function NestedStylesHook() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      This is red since it is inside the root.
      <p>
        This is green since it is inside the paragraph{' '}
        <span>and this is blue since it is inside the span</span>
      </p>
    </div>
  );
}
```
Pretty cool right?


## Reflection Questions

1. What are the benefits and challenges of using a component library like Material UI? Do you think you will incorporate a component library into your future projects?
2. How does styling Material UI components compare with regular css/sass? Did you run into any trouble customizing the components? 


## Resources

* https://material-ui.com
* https://material-ui.com/getting-started/templates/#react-templates
