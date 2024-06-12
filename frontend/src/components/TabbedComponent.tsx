import { Box, Stack, Tabs } from '@mui/material';
import { customPanelTypes, TabbedComponentProps } from 'types';

export function CustomTabPanel(props: customPanelTypes) {
  const { children, value, index, height, ...other } = props;
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

const Tab = ({ value, handleChange, children }: TabbedComponentProps) => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      {children}
    </Tabs>
  )
}

function TabbedComponent({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ width: '100%' }}>
      {children}
    </Box>
  );
}

TabbedComponent.Tab = Tab
export default TabbedComponent;
