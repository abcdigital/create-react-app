import * as React from 'react';
import {
  BrandLogo,
  Button,
  Collapsible,
  CollapsiblePanel,
  CollapsibleToggle,
  GlobalStyles,
  Heading,
  LayoutContainer,
  MastheadBox,
  TextInput,
} from '@abcaustralia/nucleus';
import { GlobalLogin, GlobalNavigation } from '@abcaustralia/global-components';
import { Star } from '@abcaustralia/icons';

import styles from './App.module.css';

function App() {
  return (
    <GlobalStyles>
      <MastheadBox contentAnchor="#content" className={styles.masthead}>
        <BrandLogo
          logoType="abc"
          screenReaderText="ABC"
          className={styles.logo}
        />
        <GlobalLogin
          containerClassName={styles.login}
          dropdownClassName={styles.loginDropdown}
          profile={{
            displayName: 'ABC Australia',
            getSettingsHref: function noRefCheck() {},
            isLoggedIn: true,
            logout: function noRefCheck() {},
          }}
        />
        <GlobalNavigation
          navItems={[]}
          buttonClassName={styles.globalNavButton}
        />
      </MastheadBox>

      <LayoutContainer>
        <Heading>Heading</Heading>
        <Star />
        <div>
          <Button>Ghost</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="flat">Flat</Button>
        </div>
        <div>
          <TextInput label="Test" />
          <br />
          <TextInput label="Disabled" disabled />
          <br />
        </div>
        <Collapsible title="Collapsible item" headingLevel="h2">
          <CollapsibleToggle title="Collapsible" hasFocus />
          <CollapsiblePanel>
            <p>
              Lorem ipsum dolor sit amet, cu invidunt definiebas comprehensam
              vim. Mea singulis torquatos ei. Duis probatus consulatu ea cum, id
              falli integre facilisis his. Qui eligendi facilisi ne, vis modus
              referrentur an, principes pertinacia ei sea. Ad his quod doctus
              contentiones.
            </p>
          </CollapsiblePanel>
        </Collapsible>
      </LayoutContainer>
    </GlobalStyles>
  );
}

export default App;
