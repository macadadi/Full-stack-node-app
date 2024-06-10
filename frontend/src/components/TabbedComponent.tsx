import { Box, Stack, Tab, Tabs } from '@mui/material';
import { customPanelTypes, TabbedComponentProps } from 'types';

export function CustomTabPanel(props: customPanelTypes) {
  const { children, value, index,height, ...other } = props;
  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Stack>
  );
}

export default function TabbedComponent({ children, value, handleChange }: TabbedComponentProps ){
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={0} label="All Books" />
        <Tab value={1} label="Favorite Books" />
      </Tabs>
      {children}
    </Box>
  );
}
