import { Col, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import SignButton from './SignButton'

export default () => {
    return (
        <>
            <Header>
                <Row>
                    <Col push={18}>
                        <ConnectButton />

                        <SignButton />
                    </Col>
                </Row>
            </Header>
        </>
    )
}
