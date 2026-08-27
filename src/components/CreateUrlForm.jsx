import { useState } from 'react';

import { createShortUrl } from '../api/urlApi';
import ShortUrlCard from './ShortUrlCard';

function CreateUrlForm() {

  const [longUrl, setLongUrl] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      const response = await createShortUrl(longUrl);

      setGeneratedUrl(response.data);

      // Clear input
      setLongUrl('');

    } catch (error) {

      console.error('Failed to create short URL:', error);

    }
  };

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        'http://localhost:8080/go/' + generatedUrl
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {

      console.error('Failed to copy:', error);

    }
  };

  return (
    <form onSubmit={onSubmitHandler}>

      <div className="flex flex-col gap-4">

        {/* Header */}

        <div className="flex items-center px-4 justify-start gap-4">

          <div
            className="
              rounded-full
              flex
              items-center
              justify-center
              h-14
              w-14
              text-3xl
              bg-violet-200
              text-violet-700
            "
          >
            <i className="ri-links-line"></i>
          </div>

          <div className="px-4 flex gap-2 flex-col">

            <h1 className="text-3xl font-bold">
              Create Short URL
            </h1>

            <p className="text-gray-600">
              Paste your long URL below to generate a short, trackable link.
            </p>

          </div>

        </div>

        {/* Input */}

        <div className="px-4 flex gap-4 flex-col">

          <label
            htmlFor="longUrl"
            className="font-semibold"
          >
            Long URL
          </label>

          <div className="flex h-12 justify-start gap-2">

            <input
              type="text"
              id="longUrl"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="
                w-full
                px-4
                py-2
                border
                border-gray-300
                rounded-md
                focus:border-gray-400
                focus:outline-none
              "
              placeholder="http://example.com/very-long-url-you-want-to-short"
            />

            <button
              type="submit"
              className="
                bg-violet-700
                text-white
                px-4
                py-2
                rounded-md
                text-nowrap
                flex
                justify-center
                items-center
                cursor-pointer
              "
            >
              <i className="ri-flashlight-fill"></i>
              Generate
            </button>

          </div>

          {generatedUrl && (
            <ShortUrlCard
              generatedUrl={generatedUrl}
              copied={copied}
              handleCopy={handleCopy}
            />
          )}

        </div>

      </div>

    </form>
  );
}

export default CreateUrlForm;