
import modal from './modules/modal';
import link from './modules/link';
import topSlider from './modules/topSlider';
import servicesSlider from './modules/servicesSlider';
import accordeon from './modules/accordeon';
import validateForm from './modules/validateForm';
import sendForm from './modules/sendForm';

modal();
link();
topSlider();
servicesSlider();
accordeon();
validateForm();
sendForm({
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
