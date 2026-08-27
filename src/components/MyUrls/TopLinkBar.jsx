import React from 'react';
import TopLinkCard from '../TopLinkCard';

const TopLinkBar = ({topLinks, onDeleteHandler}) => {
    return (
        <div className="w-full pt-2">

            {/* Header */}
            <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr_0.8fr] gap-4 px-8 py-4 font-semibold bg-gray-200 rounded-t-xl border border-gray-300">
                <h4>Original URL</h4>
                <h4>Short Link</h4>
                <h4>Clicks</h4>
                <h4>Created</h4>
                <h4>Actions</h4>
            </div>

            {/* Rows */}
            {topLinks.map((link, idx) => (
                <TopLinkCard
                    onDeleteHandler={onDeleteHandler}
                    key={idx}
                    linkData={link}
                />
            ))}

        </div>
    );
}

export default TopLinkBar;
