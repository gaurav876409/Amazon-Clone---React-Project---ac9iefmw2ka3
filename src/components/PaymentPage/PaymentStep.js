import React, { useState, useEffect, useContext } from 'react'
import "./Payment.css";
import { PiPlusThin } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { LiaRupeeSignSolid } from 'react-icons/lia'
import Modal from 'react-modal';
import CreditCardInput from 'react-credit-card-input';
import { CartContext } from '../CartContext';

const PaymentStep = (props) => {
    // const [selectedMethod, setSelectedMethod] = useState();
    // const handlePaymentMethodChange = (e) => {
    //     props.setSelectedMethod(e.target.value)
    // }
    useEffect(() => {
        const paymentString = JSON.stringify(props.selectedMethod);
        localStorage.setItem('select', paymentString);
      }, [props.selectedMethod]);

    const { item, increment, removeFromCart, updateQuantity } = useContext(CartContext);

    const [size, setSize] = useState(0);

    useEffect(() => {
        const totalQuantity = item.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setSize(totalQuantity);
    }, [item]);

    const cartValue = function () {
        let price = 0;
        for (let i = 0; i < item.length; i++) {
            price += (item[i].price * item[i].quantity);
        }
        return price.toFixed(2);
    }
    const totalValue = function () {
        let price = 0;
        for (let i = 0; i < item.length; i++) {
            price += item[i].price * item[i].quantity;
        }
        price += 100;
        return price.toFixed(2);
    };
    const [isCardModalOpen, setIsCardModalOpen] = React.useState(false);
    const [isNetBankingModalOpen, setIsNetBankingModalOpen] = React.useState(false);
    const [isOtherUPIModalOpen, setIsOtherUPIModalOpen] = React.useState(false);
    const [isEMIModalOpen, setIsEMIModalOpen] = React.useState(false);
    const [isCODModalOpen, setIsCODModalOpen] = React.useState(false);

    const openCardModal = () => {
        setIsCardModalOpen(true);
    };

    const openNetBankingModal = () => {
        setIsNetBankingModalOpen(true);
    };

    const openOtherUPIModal = () => {
        setIsOtherUPIModalOpen(true);
    };

    const openEMIModal = () => {
        setIsEMIModalOpen(true);
    };

    const openCODModal = () => {
        setIsCODModalOpen(true);
    };

    const closeModals = () => {
        setIsCardModalOpen(false);
        setIsNetBankingModalOpen(false);
        setIsOtherUPIModalOpen(false);
        setIsEMIModalOpen(false);
        setIsCODModalOpen(false);
    };
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    // Implement form state and validation logic for the payment step here
    return (
        <div className='billing_container'>
            <div className='billing_body'>
                <div className='amazon_balance'>
                    <h4>Your available balance</h4>
                    <hr
                        style={{
                            background: "#BBBFBF",
                            height: "1px",
                            border: "none",
                            width: "95%",
                            marginTop: "-20px",
                        }}
                    />
                    <div className='amazon_balance_content'>
                        <div>{<PiPlusThin style={{ marginTop: "5px" }} />}</div>
                        <div><input type='text' className='amazon_balance_input' placeholder='Enter Code' /></div>
                        <div><button className='apply_button'>Apply</button></div>
                    </div>
                </div>
                <div className='amazon_card'>
                    <h4>Another payment method</h4>
                    <hr
                        style={{
                            background: "#BBBFBF",
                            height: "1px",
                            border: "none",
                            width: "95%",
                            marginTop: "-20px",
                        }}
                    />
                    <div className='amazon_radio_button'>
                        <div><input type="radio" name="payment" value="Credit or debit card" onClick={openCardModal} onChange={props.handlePaymentMethodChange}/>
                            <label for="credit" className='radio_text'>Credit or debit card</label>
                            <Modal
                                isOpen={isCardModalOpen}
                                onRequestClose={closeModals}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='credit_modal_header'>
                                    <div><h3>Enter card details</h3></div>
                                    <div><RxCross1 onClick={closeModals} style={{ marginTop: "20px" }} /></div>
                                </div>
                                <div className='credit_modal_detail'>
                                    <CreditCardInput
                                        cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardCVCChange(e => console.log('cvc change', e))}
                                            />
                                        )}
                                        cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardExpiryChange(e =>
                                                    console.log('expiry change', e)
                                                )}
                                            />
                                        )}
                                        cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardNumberChange(e =>
                                                    console.log('number change', e)
                                                )}
                                            />
                                        )}
                                    />
                                </div>
                                <div className='button_flex_center'><button className='use_payment_method' onClick={closeModals}>Use this payment method</button></div>
                            </Modal>
                        </div>
                        <div className='sprite_image'>
                            <span className='sprite_image1'></span>
                            <span className='sprite_image2'></span>
                            <span className='sprite_image3'></span>
                            <span className='sprite_image4'></span>
                            <span className='sprite_image5'></span>
                            <span className='sprite_image6'></span>
                            <span className='sprite_image7'></span>
                        </div>
                        <div className='radio_button_gap'><input type="radio" name="payment" value="Net Banking" onClick={openNetBankingModal} onChange={props.handlePaymentMethodChange}/>
                            <label for="credit" className='radio_text'>Net Banking</label>
                            <Modal
                                isOpen={isNetBankingModalOpen}
                                onRequestClose={closeModals}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='netbanking_header'>
                                    <div>
                                        <select style={{ height: "34px" }}>
                                            <option value="0">Choose an Option</option>
                                            <option value="1">SBI Bank</option>
                                            <option value="2">ICICI Bank</option>
                                            <option value="3">HDFC Bank</option>
                                            <option value="4">Kotak Bank</option>
                                            <option value="5">Andra Bank</option>
                                            <option value="6">Canara Bank</option>
                                            <option value="7">Cosmos Bank</option>
                                        </select>
                                    </div>
                                    <div><RxCross1 onClick={closeModals} style={{ marginTop: "5px" }} /></div>
                                </div>
                                <div className='netbanking_code'>
                                    <div><input type='text' className='amazon_balance_input' placeholder='Enter Code' /></div>
                                    <div><button className='apply_button' style={{ marginLeft: "10px" }}>Apply</button></div>
                                </div>
                                <div className='button_flex_center'><button className='use_payment_method' onClick={closeModals}>Use this payment method</button></div>
                            </Modal>
                        </div>
                        <div className='radio_button_gap'><input type="radio" name="payment" value="Other UPI Apps" onClick={openOtherUPIModal} onChange={props.handlePaymentMethodChange}/>
                            <label for="credit" className='radio_text'>Other UPI Apps</label>
                            <Modal
                                isOpen={isOtherUPIModalOpen}
                                onRequestClose={closeModals}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='otherupi_header'>
                                    <div>
                                        <h3>Please enter your UPI ID</h3>
                                    </div>
                                    <div><RxCross1 onClick={closeModals} style={{ marginTop: "20px" }} /></div>
                                </div>
                                <div>
                                    <input type='text' className='amazon_balance_input' placeholder='Ex: MobileNumber@upi' />
                                    <button className='apply_button' style={{ marginLeft: "10px" }}>Verify</button>
                                </div>
                                <div className='button_flex_center'><button className='use_payment_method' onClick={closeModals}>Use this payment method</button></div>
                            </Modal>
                        </div>
                        <div className='radio_button_gap'><input type="radio" name="payment" value="EMI" onClick={openEMIModal} onChange={props.handlePaymentMethodChange}/>
                            <label for="credit" className='radio_text'>EMI</label>
                            <Modal
                                isOpen={isEMIModalOpen}
                                onRequestClose={closeModals}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='credit_modal_header'>
                                    <div><h3>Enter card details</h3></div>
                                    <div><RxCross1 onClick={closeModals} style={{ marginTop: "20px" }} /></div>
                                </div>
                                <div className='credit_modal_detail'>
                                    <CreditCardInput
                                        cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardCVCChange(e => console.log('cvc change', e))}
                                            />
                                        )}
                                        cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardExpiryChange(e =>
                                                    console.log('expiry change', e)
                                                )}
                                            />
                                        )}
                                        cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                            <input
                                                {...props}
                                                onChange={handleCardNumberChange(e =>
                                                    console.log('number change', e)
                                                )}
                                            />
                                        )}
                                    />
                                </div>
                                <div className='button_flex_center'><button className='use_payment_method' onClick={closeModals}>Use this payment method</button></div>
                            </Modal>
                        </div>
                        <div className='radio_button_gap'><input type="radio" name="payment" value="Cash/Pay on Delivery" onClick={openCODModal} onChange={props.handlePaymentMethodChange}/>
                            <label for="credit" className='radio_text'>Cash/Pay on Delivery</label>
                            <Modal
                                isOpen={isCODModalOpen}
                                onRequestClose={closeModals}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <div className='otherupi_header'>
                                    <div>
                                        <h3>Cash, UPI and Cards accepted.</h3>
                                    </div>
                                    <div><RxCross1 onClick={closeModals} /></div>
                                </div>
                                <div className='button_flex_center'><button className='use_payment_method' onClick={closeModals}>Use this payment method</button></div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className='billing_summary'>
                <div className='button_flex_center'><button className='use_payment_method'>Use this payment method</button></div>
                <div className='billing_paragraph'>
                    <span>Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.</span>
                </div>
                <hr
                    style={{
                        background: "#BBBFBF",
                        height: "1px",
                        border: "none",
                        width: "95%",
                        marginTop: "-20px",
                    }}
                />
                <h3 className='billing_htag'>Order Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td><LiaRupeeSignSolid />{cartValue()}</td>
                        </tr>
                        <tr>
                            <td>Delivery:</td>
                            <td><LiaRupeeSignSolid />100.00</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td><LiaRupeeSignSolid />{totalValue()}</td>
                        </tr>
                        <tr>
                            <td>Promotion Applied:</td>
                            <td><LiaRupeeSignSolid />100.00</td>
                        </tr>
                        <tr>
                            <td><hr
                                style={{
                                    background: "#BBBFBF",
                                    height: "1px",
                                    border: "none",
                                    width: "100%",
                                }}
                            /></td>
                            <td><hr
                                style={{
                                    background: "#BBBFBF",
                                    height: "1px",
                                    border: "none",
                                    width: "100%",
                                    marginLeft: "-20px",
                                }}
                            /></td>
                        </tr>

                        <tr>
                            <td>Order Total:</td>
                            <td><LiaRupeeSignSolid />{cartValue()}</td>
                        </tr>
                        <tr>
                            <td><hr
                                style={{
                                    background: "#BBBFBF",
                                    height: "1px",
                                    border: "none",
                                    width: "100%",
                                }}
                            /></td>
                            <td><hr
                                style={{
                                    background: "#BBBFBF",
                                    height: "1px",
                                    border: "none",
                                    width: "100%",
                                    marginLeft: "-20px",
                                }}
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <div className='billing_anchor'>
                    <a href='#'>How are delivery costs calculated?</a>
                </div>
            </div>
        </div>
    )
};
export default PaymentStep;