import React from 'react';
import File from '../../../public/static/icons/file.svg';
import Link from '../../../public/static/icons/link.svg';

const UploaderContent = () => (
    <div className='uploader__content'>
        <div className="tabs">
            <div className="tab">1</div>
            <div className="tab">2</div>
            <div className="tab">3</div>
        </div>
        <div className='tabs__content'>
            <span className='header_tabs'>Document Uploader</span>
            <div className='cards'>
                <div className='card'>
                    <File/>
                    <span>Upload from File</span>
                </div>
                <div className='card'>
                    <Link/>
                    <span>Upload from URL</span>
                </div>
            </div>
        </div>
      
    </div>
);

export default UploaderContent