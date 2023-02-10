import { useState, useEffect } from "react";

// react-router-dom components

import { Link,useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";
import MDSnackbar from "components/MDSnackbar";
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import CoverLayout from "../components/CoverLayout";
import { useDispatch, useSelector } from 'react-redux'
import { actionLogin } from '../../../redux/actions/Login'

function Basic() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer)

  let history = useNavigate()
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [show, setShow] = useState(false);
  const toggleSnackbar = () => setShow(!show);
  const handleLogin = () => {
    setShow(false)
    if(!username || !password) {
      setShow(true)
    }
    dispatch(actionLogin({username,password}))
  }
  useEffect(() => {
    if(user) {
      if(user.loading) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    if(user.code === 0) {
      history("/dashboard")
    }
  },[user])
  return (
    <CoverLayout image={bgImage}>
      <MDSnackbar
        color="error"
        icon="notifications"
        title="Thông báo"
        content="Mật khẩu hoặc tài khoản không đúng. Vui lòng thử lại sau"
        dateTime={'now'}
        open={show}
        close={toggleSnackbar}
      />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography 
            onClick={handleLogin}
            variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
              onInput={e => setUsername(e.target.value)}
              value={username}
              type="text" label="Số điện thoại" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
              value={password} 
              onInput={e => setPassword(e.target.value)}
              type="password" 
              label="Mật khẩu" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={handleLogin} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/register"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Basic;
