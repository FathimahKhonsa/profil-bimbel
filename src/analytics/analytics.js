import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-Q8GTGDVC9W');
}

export const logPageView = (page) => {
    ReactGA.send({hitType: 'pageview', page });
};