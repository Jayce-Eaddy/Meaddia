import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => (
    <Stack
        direction='row'
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column ' },
        }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                style={{
                    background: category.name ===
                        selectedCategory && '#7289da',
                    color: 'white'
                }}
            >
                <span style={{
                    color: category.name === selectedCategory ?
                        'white' : '#7289da', marginRight: '15px'
                }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '2' : '1' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar