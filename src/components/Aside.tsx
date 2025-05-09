import { MenuProps } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import CustomminiCalendar from '../components/CustomMiniCalendar';

const items2: MenuProps['items'] = [
    {
        key: 'calendar',
        label: <CustomminiCalendar />,
        type: 'group',
    },
    {
        key: 'activities',
        label: (
            <div style={{ padding: '10px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    <BookOutlined /> Actividades
                </div>
                <ul style={{ listStyleType: 'none', paddingLeft: 20, margin: 0 }}>
                    <li style={{ padding: '5px 0' }}>Actividad 1</li>
                    <li style={{ padding: '5px 0' }}>Actividad 2</li>
                    <li style={{ padding: '5px 0' }}>Actividad 3</li>
                </ul>
            </div>
        ),
        type: 'group',
    },
];

export default items2;