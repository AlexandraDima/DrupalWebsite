<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/views_ui/templates/views-ui-display-tab-bucket.html.twig */
class __TwigTemplate_6c6d15fea543b4ff3f16adf9aa1bb9b3fbda876e414a3dda47ff19514edb2162 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 21, "if" => 28];
        $filters = ["clean_class" => 23, "escape" => 27];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 21
        $context["classes"] = [0 => "views-ui-display-tab-bucket", 1 => ((        // line 23
($context["name"] ?? null)) ? (\Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["name"] ?? null)))) : ("")), 2 => ((        // line 24
($context["overridden"] ?? null)) ? ("overridden") : (""))];
        // line 27
        echo "<div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 28
        if (($context["title"] ?? null)) {
            // line 29
            echo "<h3 class=\"views-ui-display-tab-bucket__title\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null)), "html", null, true);
            echo "</h3>";
        }
        // line 31
        echo "  ";
        if (($context["actions"] ?? null)) {
            // line 32
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["actions"] ?? null)), "html", null, true);
        }
        // line 34
        echo "  ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
</div>
";
    }

    public function getTemplateName()
    {
        return "core/modules/views_ui/templates/views-ui-display-tab-bucket.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 34,  74 => 32,  71 => 31,  66 => 29,  64 => 28,  59 => 27,  57 => 24,  56 => 23,  55 => 21,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation for each \"box\" on the display query edit screen.
 *
 * Available variables:
 * - attributes: HTML attributes to apply to the container element.
 * - actions: Action links such as \"Add\", \"And/Or, Rearrange\" for the content.
 * - title: The title of the bucket, e.g. \"Fields\", \"Filter Criteria\", etc.
 * - content: Content items such as fields or settings in this container.
 * - name: The name of the bucket, e.g. \"Fields\", \"Filter Criteria\", etc.
 * - overridden: A boolean indicating the setting has been overridden from the
 *   default.
 *
 * @see template_preprocess_views_ui_display_tab_bucket()
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'views-ui-display-tab-bucket',
    name ? name|clean_class,
    overridden ? 'overridden',
  ]
%}
<div{{ attributes.addClass(classes) }}>
  {% if title -%}
    <h3 class=\"views-ui-display-tab-bucket__title\">{{ title }}</h3>
  {%- endif %}
  {% if actions -%}
    {{ actions }}
  {%- endif %}
  {{ content }}
</div>
", "core/modules/views_ui/templates/views-ui-display-tab-bucket.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\core\\modules\\views_ui\\templates\\views-ui-display-tab-bucket.html.twig");
    }
}
