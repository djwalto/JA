import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MobileSubmitReportModal from '../MobileVolunteerClassesPage/MobileSubmitReportModal';
import S3ImageUploader from './S3ImageUploader';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function S3Page(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <MobileSubmitReportModal />
            <br></br>
            <S3ImageUploader />
        </div>
    );
}

export default connect(mapStoreToProps)(S3Page);
