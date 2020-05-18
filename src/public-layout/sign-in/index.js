// outsource dependencies
import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

// local dependencies
import SignInForm from './sign-in.form';

export default memo(() => {

    return <Container className="d-flex flex-column justify-content-center">
        <Row>
            <Col>
                <h3>Your Phone Number</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Please confirm your country code and enter your phone number.</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <SignInForm />
            </Col>
        </Row>
    </Container>;
});
