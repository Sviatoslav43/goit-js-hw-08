import throttle from 'lodash.throttle';

const formData = {
  email: '',
  message: '',
};

const formRef = document.querySelector('.feedback-form')
// console.log(formRef)

const emailRef = document.querySelector('.feedback-form input')
// console.log(emailRef)

const messageRef = document.querySelector('.feedback-form textarea')
// console.log(messageRef)

const STORAGE_KEY = 'feedback-form-state';

populateData()

formRef.addEventListener('submit', e => {
  e.preventDefault()
  console.log(getData(STORAGE_KEY))
  removeData(STORAGE_KEY)
  e.currentTarget.reset()
})

emailRef.addEventListener('input', throttle(e => {
  formData.email = e.target.value;
  saveInfo(STORAGE_KEY, formData);
}, 350))

messageRef.addEventListener('input', throttle(e => {
  formData.message = e.target.value;
  saveInfo(STORAGE_KEY, formData);
}, 350))

function saveInfo(key, value) {
  try {
    const setData = JSON.stringify(value)
    localStorage.setItem(key, setData)
  } catch (error) {
    console.log("error ", error.message);
  }
}

function populateData() {
  const data = getData(STORAGE_KEY);
  if (data) {
    emailRef.value = data.email;
    messageRef.value = data.message;
  }
}

function getData(value) {
  try {
    const dataInfo = localStorage.getItem(value)
    if (dataInfo) {
      return JSON.parse(dataInfo)
    }
  } catch (error) {
    console.log("error ", error.message);
  }
}

function removeData(localData) {
  try {
    localStorage.removeItem(localData)
  } catch (error) {
    console.log("error ", error.message);
  }
}
