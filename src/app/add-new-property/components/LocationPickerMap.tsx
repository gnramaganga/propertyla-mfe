export default function LocationPickerMap() {
  return (
    <div className="tp-dashboard-new-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15938349.364800545!2d101.6869!3d3.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
