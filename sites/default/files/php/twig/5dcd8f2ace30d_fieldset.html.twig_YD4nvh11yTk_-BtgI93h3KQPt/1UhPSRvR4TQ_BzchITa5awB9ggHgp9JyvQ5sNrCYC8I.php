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

/* core/modules/system/templates/fieldset.html.twig */
class __TwigTemplate_270396ef61c9d25b30c69084d02cd13aae88ef416fb6da24acd7978ea69402f7 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 27, "if" => 47];
        $filters = ["escape" => 34];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
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
        // line 27
        $context["classes"] = [0 => "js-form-item", 1 => "form-item", 2 => "js-form-wrapper", 3 => "form-wrapper"];
        // line 34
        echo "<fieldset";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 36
        $context["legend_span_classes"] = [0 => "fieldset-legend", 1 => ((        // line 38
($context["required"] ?? null)) ? ("js-form-required") : ("")), 2 => ((        // line 39
($context["required"] ?? null)) ? ("form-required") : (""))];
        // line 42
        echo "  ";
        // line 43
        echo "  <legend";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["legend"] ?? null), "attributes", [])), "html", null, true);
        echo ">
    <span";
        // line 44
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["legend_span"] ?? null), "attributes", []), "addClass", [0 => ($context["legend_span_classes"] ?? null)], "method")), "html", null, true);
        echo ">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["legend"] ?? null), "title", [])), "html", null, true);
        echo "</span>
  </legend>
  <div class=\"fieldset-wrapper\">
    ";
        // line 47
        if (($context["errors"] ?? null)) {
            // line 48
            echo "      <div>
        ";
            // line 49
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null)), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 52
        echo "    ";
        if (($context["prefix"] ?? null)) {
            // line 53
            echo "      <span class=\"field-prefix\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null)), "html", null, true);
            echo "</span>
    ";
        }
        // line 55
        echo "    ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null)), "html", null, true);
        echo "
    ";
        // line 56
        if (($context["suffix"] ?? null)) {
            // line 57
            echo "      <span class=\"field-suffix\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null)), "html", null, true);
            echo "</span>
    ";
        }
        // line 59
        echo "    ";
        if ($this->getAttribute(($context["description"] ?? null), "content", [])) {
            // line 60
            echo "      <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["description"] ?? null), "attributes", []), "addClass", [0 => "description"], "method")), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["description"] ?? null), "content", [])), "html", null, true);
            echo "</div>
    ";
        }
        // line 62
        echo "  </div>
</fieldset>
";
    }

    public function getTemplateName()
    {
        return "core/modules/system/templates/fieldset.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 62,  117 => 60,  114 => 59,  108 => 57,  106 => 56,  101 => 55,  95 => 53,  92 => 52,  86 => 49,  83 => 48,  81 => 47,  73 => 44,  68 => 43,  66 => 42,  64 => 39,  63 => 38,  62 => 36,  57 => 34,  55 => 27,);
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
 * Default theme implementation for a fieldset element and its children.
 *
 * Available variables:
 * - attributes: HTML attributes for the <fieldset> element.
 * - errors: (optional) Any errors for this <fieldset> element, may not be set.
 * - required: Boolean indicating whether the <fieldeset> element is required.
 * - legend: The <legend> element containing the following properties:
 *   - title: Title of the <fieldset>, intended for use as the text
       of the <legend>.
 *   - attributes: HTML attributes to apply to the <legend> element.
 * - description: The description element containing the following properties:
 *   - content: The description content of the <fieldset>.
 *   - attributes: HTML attributes to apply to the description container.
 * - children: The rendered child elements of the <fieldset>.
 * - prefix: The content to add before the <fieldset> children.
 * - suffix: The content to add after the <fieldset> children.
 *
 * @see template_preprocess_fieldset()
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'js-form-item',
    'form-item',
    'js-form-wrapper',
    'form-wrapper',
  ]
%}
<fieldset{{ attributes.addClass(classes) }}>
  {%
    set legend_span_classes = [
      'fieldset-legend',
      required ? 'js-form-required',
      required ? 'form-required',
    ]
  %}
  {#  Always wrap fieldset legends in a <span> for CSS positioning. #}
  <legend{{ legend.attributes }}>
    <span{{ legend_span.attributes.addClass(legend_span_classes) }}>{{ legend.title }}</span>
  </legend>
  <div class=\"fieldset-wrapper\">
    {% if errors %}
      <div>
        {{ errors }}
      </div>
    {% endif %}
    {% if prefix %}
      <span class=\"field-prefix\">{{ prefix }}</span>
    {% endif %}
    {{ children }}
    {% if suffix %}
      <span class=\"field-suffix\">{{ suffix }}</span>
    {% endif %}
    {% if description.content %}
      <div{{ description.attributes.addClass('description') }}>{{ description.content }}</div>
    {% endif %}
  </div>
</fieldset>
", "core/modules/system/templates/fieldset.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\core\\modules\\system\\templates\\fieldset.html.twig");
    }
}
