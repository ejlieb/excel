import './DataInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCsvData, setData } from '../features/dataSlice';
import { react, useState } from 'react';
import { FileUpload, Container, Header } from '@cloudscape-design/components';
import Papa from 'papaparse';

const DataInput = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const csvData = useSelector((state) => state.csvData);
    const excel = require('exceljs');
    var commonConfig = { delimiter: ',' };

    const handleData = async (detail) => {
        console.log(detail);
        if (detail.value.length === 1) {
            const workbook = new excel.Workbook();
            await workbook.xlsx.load(detail.value[0]);
            workbook.eachSheet(function (worksheet, sheetId) {
                worksheet.eachRow((row, rowNumber) => {
                    // console.log(row.values);
                });

                console.log(worksheet.rowCount);
            });
        } else {
            console.log('ss');
        }

        // detail.value.forEach((e) => {
        //     Papa.parse(e, {
        //         ...commonConfig,
        //         complete: (result) => {
        //             console.log(result);
        //             dispatch(setCsvData(result.data));
        //         },
        //     });
        // });

        dispatch(setData(detail.value));
    };

    return (
        <div
            className='swiper-container'
            onClick={() => console.log(data, csvData)}
        >
            <Container header={<Header variant='h2'>Excel Data</Header>}>
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
