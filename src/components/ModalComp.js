import { Modal, Button } from "react-bootstrap";

function ModalComp(props) {
  return (
    <Modal {...props} size="lg" centered dir="rtl">
      <Modal.Header closeButton>
        <Modal.Title>پرسش‌ها</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>P / R چیست؟</h4>
        <p>
          نسبت قیمت به اجاره (P به R): این نسبت بیان می‌کند که قیمت هر متر مربع
          آپارتمان چه نسبتی از اجاره بهای سالانه آن می شود. P= قیمت واحد مسکونی
          R= اجاره بهای سالانه
        </p>
        <h4>فرمول تبدیل رهن به اجاره؟</h4>
        <p>
          هر 100 میلیون رهن حدود 3.3 میلیون اجاره. ( توجه: موقعیت مکانی ملک نیز
          جز معیارهای مهم در تبدیل رهن به اجاره محسوب می شود.)
        </p>
        <h4>فرمول تبدیل اجاره به رهن؟</h4>
        <p>
          هر یک میلیون اجاره حدود 33 میلیون رهن.( توجه: موقعیت مکانی ملک نیز جز
          معیارهای مهم در تبدیل رهن به اجاره محسوب می شود.)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>بستن</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp;
