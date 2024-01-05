// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    csmvautah: [

        'utah',

        {
            'Get Started': [
                'overview',
                'audience',
                'definitions',
            ],

            '1. OOB Experience': [
                'exercise_1_OOB/overview',
                'exercise_1_OOB/oob',
            ],
            '2. Branding': [
                'exercise_2_branding/overview',
                'exercise_2_branding/branding',
                'exercise_2_branding/verification',
            ],
            '3. NLU': [
                'exercise_3_NLU/overview',
                'exercise_3_NLU/nlu',
                'exercise_3_NLU/verification',
            ],
            '4. Create VA Topic ': [
                'exercise_4_VA/overview',
                'exercise_4_VA/va',
                'exercise_4_VA/verification',
            ],

            '5. Iterate': [
                'exercise_5_iterate/overview',
                'exercise_5_iterate/iterate',
            ],

            'Review': [
                'review',
            ],

        }
    ],
};

module.exports = sidebars;