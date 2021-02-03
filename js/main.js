const darkToggle = document.getElementById('switch');

const styles = getComputedStyle(document.documentElement);

const LbgBody = String(styles.getPropertyValue('--Light-background-color')).trim();
const LbgHeader = String(styles.getPropertyValue('--Light-background-top-color')).trim();
const LcolorTextGray = String(styles.getPropertyValue('--Light-Grayish-Blue')).trim();
const LcolorTextBlack = String(styles.getPropertyValue('--Light-Very-Dark-Blue')).trim();
const LcolorTextGrayDark = String(styles.getPropertyValue('--Light-Dark-Grayish-Blue')).trim();
const LcolorActiveCard = String(styles.getPropertyValue('--Light-active-card-color')).trim();

const DbgBody = String(styles.getPropertyValue('--Dark-background-color')).trim();
const DbgHeader = String(styles.getPropertyValue('--Dark-background-top-color')).trim();
const DcolorTextGray = String(styles.getPropertyValue('--Dark-Very-Desaturated-Blue')).trim();
const DcolorTextBlack = String(styles.getPropertyValue('--Dark-White')).trim();
const DcolorTextGrayDark = String(styles.getPropertyValue('--Dark-Desaturated-Blue')).trim();
const DcolorActiveCard = String(styles.getPropertyValue('--Dark-active-card-color')).trim();

const cards = document.querySelectorAll('.card-item, .card-item-overview');

cards.forEach((card)=>{
    card.addEventListener('click', function(){
        let cad = card.querySelector('.card-content h2').innerHTML;
        if(cad.endsWith('k')){
            let num = parseInt(cad) + 1 ;
            card.querySelector('.card-content h2').innerHTML = num + 'k';
        }else{
            num = parseInt(cad) + 1;
            card.querySelector('.card-content h2').innerHTML = num;
        }   
    });
});

darkToggle.addEventListener('click', function () {


    if(this.classList.contains('dark')){
        document.documentElement.style.setProperty('--Light-background-color', LbgBody);
        document.documentElement.style.setProperty('--Light-background-top-color', LbgHeader);
        document.documentElement.style.setProperty('--Light-Grayish-Blue', LcolorTextGray);
        document.documentElement.style.setProperty('--Light-Very-Dark-Blue', LcolorTextBlack);
        document.documentElement.style.setProperty('--Light-Dark-Grayish-Blue', LcolorTextGrayDark);
        document.documentElement.style.setProperty('--Light-active-card-color', LcolorActiveCard);

        this.classList.remove('dark');
    }else{
        document.documentElement.style.setProperty('--Light-background-color', DbgBody);
        document.documentElement.style.setProperty('--Light-background-top-color', DbgHeader);
        document.documentElement.style.setProperty('--Light-Grayish-Blue', DcolorTextGray);
        document.documentElement.style.setProperty('--Light-Very-Dark-Blue', DcolorTextBlack);
        document.documentElement.style.setProperty('--Light-Dark-Grayish-Blue', DcolorTextGrayDark);
        document.documentElement.style.setProperty('--Light-active-card-color', DcolorActiveCard);

        this.classList.toggle('dark');
    }
});
