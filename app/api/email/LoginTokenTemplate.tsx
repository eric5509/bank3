import {
    Html,
    Body,
    Text,
    Img,
    Container,
  } from "@react-email/components";
  
  type Props = {
    firstName: string;
    code: string;
  };
  
  export const LoginTokenTemplate = ({ firstName, code }: Props) => {
    return (
        <Html>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <style>
                    {`
                        body {
                            font-family: 'Poppins', sans-serif;
                        }
                    `}
                </style>
            </head>
            <Body>
                <Container
                    style={{
                        border: "2px solid #0372ff",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        width: "500px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(16px)",
                        borderRadius: "12px",
                        overflow: "hidden",
                        margin: "0 auto", // Centers the container in the email
                        fontFamily: "'Poppins', sans-serif",
                    }}
                >
                    <Img
                        alt="Capital Bank"
                        style={{
                            borderRadius: "12px",
                            objectFit: "cover",
                            height: "150px",
                            margin: "0 auto",
                            display: "block",
                        }}
                        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112012/cb_vh_rgb.png?itok=cY3cBlis"
                    />
                    <Container
                        style={{
                            textAlign: "center",
                            backgroundColor: "#0372ff",
                            padding: "15px",
                            color: "white",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "18px",
                                textAlign: "center",
                                fontWeight: "600",
                                marginBottom: "30px",
                            }}
                        >
                            Login Attempt Detected
                        </Text>
                        <Text
                            style={{
                                fontSize: "22px",
                                textAlign: "center",
                                fontWeight: "600",
                                marginTop: "10px",
                            }}
                        >
                            Please Verify Your Login
                        </Text>
                    </Container>
                    <Container style={{ padding: "10px" }}>
                        <Text style={{ fontSize: "16px", marginTop: "15px" }}>
                            Hello <strong>{firstName}</strong>,
                        </Text>
                        <Text
                            style={{
                                fontSize: "14px",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            A login attempt was made on your account. Please use the following One-Time Password (OTP) to complete your authentication:
                        </Text>
                        <Text
                            style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: "#0372ff",
                                textAlign: "center",
                                margin: "10px 0",
                            }}
                        >
                            {code}
                        </Text>
                        <Text style={{ fontSize: "14px", marginTop: "10px" }}>
                            This passcode will only be valid for the next 15 minutes.
                        </Text>
                        <Text style={{ fontSize: "14px", marginTop: "10px" }}>
                            If you didn't attempt to log in, please ignore this email. No action is required from your end.
                        </Text>
                        <Text style={{ fontSize: "14px", marginTop: "10px" }}>
                            This email was sent from{" "}
                            <a
                                href="mailto:support@capitaltrustbank.com"
                                style={{
                                    color: "#0372ff",
                                    textDecoration: "none",
                                }}
                            >
                                support@capitaltrustbank.com
                            </a>
                            . If you have any concerns, feel free to reach out to us.
                        </Text>
                    </Container>
  
                    <Container
                        style={{
                            textAlign: "center",
                            backgroundColor: "#f3f3f3",
                            padding: "20px",
                            marginTop: "20px",
                            borderTop: "2px solid #0372ff"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginBottom: "5px",
                                textAlign: "center",
                            }}
                        >
                            Get in Touch
                        </Text>
                        <Text
                            style={{
                                fontSize: "14px",
                                textAlign: "center",
                                color: "#333",
                            }}
                        >
                            <a
                                href="mailto:support@capitaltrustbank.com"
                                style={{
                                    color: "#0372ff",
                                    textDecoration: "none",
                                }}
                            >
                                support@capitaltrustbank.com
                            </a>
                        </Text>
                    </Container>
                </Container>
            </Body>
        </Html>
    );
  };
  
  export default LoginTokenTemplate;
  