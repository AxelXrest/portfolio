import { useState } from "react";
import { motion } from "framer-motion";
import { socialIcons } from "../constants";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { close, github_dark } from "../assets";
const FORM_SUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/ajaynemkulshrestha@gmail.com";
const EMPTY_ERRORS = {
  name: "",
  email: "",
  message: "",
};
const Modal = ({ show, onClose, message }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-md z-[55] flex justify-center items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="m-6 glass-panel rounded-md p-8 relative">
        <button
          className="absolute theme-text-primary top-0 right-0 p-4"
          onClick={onClose}
        >
          <img
            src={close}
            alt="close"
            className="w-[20px] h-[20px] object-contain cursor-pointer"
          />
        </button>
        <p className="theme-text-primary text-lg sm:text-2xl p-4 sm:p-6">{message}</p>
      </div>
    </div>
  );
};
const SocialIconsCanvas = ({ name, icon, socialLink }) => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.5, 0.75)}
      onClick={() => window.open(socialLink, "_blank")}
      className='backdrop-blur-sm '
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='glass-card flex items-center space-x-2 px-4 justify-center hover:shadow-card p-3 rounded-xl '
      >
        <div className='relative w-10 h-10'>
          <img src={icon} alt='image' className=' w-full h-full object-cover' />
        </div>
        <span className='theme-text-primary text-sm py-4 gap-3'>{name}</span>
      </Tilt>
    </motion.div>
  );
};
const ShowCurrentYear = () => <span>{new Date().getFullYear()}</span>;
const Contact = ({ theme }) => {
  const isDarkMode = theme !== 'light';
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState(EMPTY_ERRORS);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const handleCloseModal = () => {
    setModalVisible(false);
    setForm({ name: "", email: "", message: "" });
    setFormErrors(EMPTY_ERRORS);
    setSubmitStatus({ type: "", message: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((currentErrors) => ({
        ...currentErrors,
        [name]: "",
      }));
    }
    if (submitStatus.message) {
      setSubmitStatus({ type: "", message: "" });
    }
  };
  const validateForm = () => {
    const errors = { ...EMPTY_ERRORS };
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.message) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus({ type: "error", message: "Please complete all required fields correctly." });
      return;
    }
    setLoading(true);
    setSubmitStatus({ type: "", message: "" });
    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("message", form.message);
      payload.append("_subject", `Portfolio contact from ${form.name}`);
      payload.append("_captcha", "false");
      payload.append("_template", "table");
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        console.error(result?.message || "Failed to send message.");
        setSubmitStatus({
          type: "error",
          message: "Message could not be sent right now. Please try again in a moment.",
        });
        return;
      }
      setModalVisible(true);
      setForm({ name: "", email: "", message: "" });
      setFormErrors(EMPTY_ERRORS);
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out.",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        type: "error",
        message: "Network error while sending. Please check your connection and retry.",
      });
    } finally {
      setLoading(false);
    }
  };
  const displaySocialIcons = socialIcons.map((social) =>
    social.name === "GitHub"
      ? { ...social, icon: isDarkMode ? social.icon : github_dark }
      : social
  );
  return (
    <div className="-mb-10 overflow-x-hidden">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 min-w-0 overflow-x-hidden overflow-y-visible`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] w-full min-w-0 glass-panel p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='theme-text-primary font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='input-glass py-4 px-6 placeholder:text-[color:var(--text-muted)] rounded-lg outline-none font-medium'
              />
              {formErrors.name && (
                <span className="mt-2 text-sm text-red-300">{formErrors.name}</span>
              )}
            </label>
            <label className='flex flex-col'>
              <span className='theme-text-primary font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='input-glass py-4 px-6 placeholder:text-[color:var(--text-muted)] rounded-lg outline-none font-medium'
              />
              {formErrors.email && (
                <span className="mt-2 text-sm text-red-300">{formErrors.email}</span>
              )}
            </label>
            <label className='flex flex-col'>
              <span className='theme-text-primary font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='input-glass py-4 px-6 placeholder:text-[color:var(--text-muted)] rounded-lg outline-none font-medium'
              />
              {formErrors.message && (
                <span className="mt-2 text-sm text-red-300">
                  {formErrors.message}
                </span>
              )}
            </label>
            {formErrors.name || formErrors.email || formErrors.message ? (
              <p className="-mt-2 text-sm text-red-400">
                Please fix the highlighted fields above.
              </p>
            ) : null}
            {submitStatus.message ? (
              <p className={`-mt-2 text-sm ${submitStatus.type === "success" ? "text-[#10ffcb]" : "text-red-400"}`}>
                {submitStatus.message}
              </p>
            ) : null}
            <button
              type='submit'
              disabled={loading}
              className='btn-primary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto h-auto w-full min-w-0'
        >
          <div className='h-full glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6'>
            <div>
              <p className={styles.sectionSubText}>Open for work</p>
              <h3 className='theme-text-primary text-[22px] sm:text-[28px] font-black'>Let's build something useful.</h3>
            </div>

            <div className='space-y-4 theme-text-secondary text-[16px]'>
              <p>
                I create fast, responsive web apps and production-ready deployments.
              </p>
              <p>
                Best way to reach me: <span className='theme-text-primary font-semibold'>ajaynemkulshrestha@gmail.com</span>
              </p>
            </div>

            <a
              href='mailto:ajaynemkulshrestha@gmail.com'
              className='w-fit btn-ghost py-3 px-6 sm:px-8 rounded-xl font-bold shadow-md shadow-primary'
            >
              Email Me Directly
            </a>
          </div>
        </motion.div>
      </div>
      <div className='mt-12 backdrop-blur-sm'>
        <div className=' py-2 md:py-2'>
          <h3 className=' theme-text-primary text-lg text-center font-bold'>
            I'm Social! Let's Connect and Collaborate
          </h3>
          <div className='flex flex-row flex-wrap justify-center gap-4 py-4 cursor-pointer'>
            {displaySocialIcons.map((social, index) => (
              <SocialIconsCanvas key={`social-${index}`} index={index} {...social} />
            ))}
          </div>
          <div className='flex flex-wrap max-w-3xl mx-auto px-4 my-3 justify-center py-4 glass-panel rounded-2xl sm:rounded-full'>
            <div className="px-1 text-[12px] theme-text-secondary">©</div>
            <div className="text-[12px] theme-text-secondary">
              <ShowCurrentYear />
            </div>
            <div className="px-2 text-[12px] theme-text-secondary">
              <span className='font-bold'>Ajaya Nemkul Shrestha</span> | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalVisible}
        onClose={handleCloseModal}
        message="Thank you. I will get back to you as soon as possible."
      />
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
