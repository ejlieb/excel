import './DataInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../features/dataSlice';
import { react, useState } from 'react';
import { FileUpload, Container, Header } from '@cloudscape-design/components';

const DataInput = () => {
    const [value, setValue] = useState([]);
    const exceljs = require('exceljs');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const handleData = (detail) => {
        dispatch(setData(detail.value));
        console.log(data);
        const workbook = new exceljs.Workbook();
    };

    return (
        <div
            className='swiper-container'
            onClick={() => console.log(data.data[0])}
        >
            <Container header={<Header variant='h2'>Container title</Header>}>
                <FileUpload
                    onChange={({ detail }) => handleData(detail)}
                    value={data.data}
                    i18nStrings={{
                        uploadButtonText: (e) =>
                            e ? 'Choose files' : 'Choose file',
                        dropzoneText: (e) =>
                            e ? 'Drop files to upload' : 'Drop file to upload',
                        removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
                        limitShowFewer: 'Show fewer files',
                        limitShowMore: 'Show more files',
                        errorIconAriaLabel: 'Error',
                    }}
                    showFileLastModified
                    showFileSize
                    showFileThumbnail
                    tokenLimit={3}
                />
            </Container>
        </div>
    );
};

export default DataInput;
