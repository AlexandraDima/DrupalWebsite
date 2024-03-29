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

/* themes/bootstrap/templates/system/status-messages.html.twig */
class __TwigTemplate_b3ebfa16e842a3679296bf7535164ecc5403152a2af64ead8c96547bc1f5d9fa extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 30, "for" => 57, "if" => 68];
        $filters = ["default" => 30, "t" => 33, "escape" => 66, "length" => 71, "first" => 78];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'for', 'if'],
                ['default', 't', 'escape', 'length', 'first'],
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
        // line 30
        $context["classes"] = (($this->getAttribute(($context["attributes"] ?? null), "offsetGet", [0 => "class"], "method", true, true)) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "offsetGet", [0 => "class"], "method")), [])) : ([]));
        // line 32
        $context["status_heading"] = ["status" => t("Status message"), "error" => t("Error message"), "warning" => t("Warning message"), "info" => t("Informative message")];
        // line 40
        $context["status_classes"] = ["status" => "success", "error" => "danger", "warning" => "warning", "info" => "info"];
        // line 48
        $context["status_roles"] = ["status" => "status", "error" => "alert", "warning" => "alert", "info" => "status"];
        // line 55
        echo "<div data-drupal-messages>
  <div class=\"messages__wrapper\">
  ";
        // line 57
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["message_list"] ?? null));
        foreach ($context['_seq'] as $context["type"] => $context["messages"]) {
            // line 58
            echo "    ";
            // line 59
            $context["message_classes"] = [0 => "alert", 1 => ("alert-" . $this->sandbox->ensureToStringAllowed($this->getAttribute(            // line 61
($context["status_classes"] ?? null), $context["type"], [], "array"))), 2 => "alert-dismissible"];
            // line 65
            echo "    ";
            // line 66
            echo "    <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["attributes"] ?? null), "setAttribute", [0 => "class", 1 => ($context["classes"] ?? null)], "method"), "addClass", [0 => ($context["message_classes"] ?? null)], "method"), "setAttribute", [0 => "role", 1 => $this->getAttribute(($context["status_roles"] ?? null), $context["type"], [], "array")], "method"), "setAttribute", [0 => "aria-label", 1 => $this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")], "method")), "html", null, true);
            echo ">
      <button type=\"button\" role=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"";
            // line 67
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Close"));
            echo "\"><span aria-hidden=\"true\">&times;</span></button>
      ";
            // line 68
            if ($this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")) {
                // line 69
                echo "        <h2 class=\"sr-only\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["status_headings"] ?? null), $context["type"], [], "array")), "html", null, true);
                echo "</h2>
      ";
            }
            // line 71
            echo "      ";
            if ((twig_length_filter($this->env, $context["messages"]) > 1)) {
                // line 72
                echo "        <ul class=\"item-list item-list--messages\">
          ";
                // line 73
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($context["messages"]);
                foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
                    // line 74
                    echo "            <li class=\"item item--message\">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["message"]), "html", null, true);
                    echo "</li>
          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 76
                echo "        </ul>
      ";
            } else {
                // line 78
                echo "        <p>";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_first($this->env, $this->sandbox->ensureToStringAllowed($context["messages"])), "html", null, true);
                echo "</p>
      ";
            }
            // line 80
            echo "    </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['type'], $context['messages'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 82
        echo "  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/bootstrap/templates/system/status-messages.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  131 => 82,  124 => 80,  118 => 78,  114 => 76,  105 => 74,  101 => 73,  98 => 72,  95 => 71,  89 => 69,  87 => 68,  83 => 67,  78 => 66,  76 => 65,  74 => 61,  73 => 59,  71 => 58,  67 => 57,  63 => 55,  61 => 48,  59 => 40,  57 => 32,  55 => 30,);
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
 * Default theme implementation for status messages.
 *
 * Displays status, error, and warning messages, grouped by type.
 *
 * An invisible heading identifies the messages for assistive technology.
 * Sighted users see a colored box. See http://www.w3.org/TR/WCAG-TECHS/H69.html
 * for info.
 *
 * Add an ARIA label to the contentinfo area so that assistive technology
 * user agents will better describe this landmark.
 *
 * Available variables:
 * - message_list: List of messages to be displayed, grouped by type.
 * - status_headings: List of all status types.
 * - display: (optional) May have a value of 'status' or 'error' when only
 *   displaying messages of that specific type.
 * - attributes: HTML attributes for the element, including:
 *   - class: HTML classes.
 *
 * @ingroup templates
 *
 * @see template_preprocess_status_messages()
 */
#}
{# Save original attribute classes. This is needed to override in loop below. #}
{# @see https://www.drupal.org/project/bootstrap/issues/2892936 #}
{% set classes = attributes.offsetGet('class')|default({}) %}
{%
  set status_heading = {
    'status': 'Status message'|t,
    'error': 'Error message'|t,
    'warning': 'Warning message'|t,
    'info': 'Informative message'|t,
  }
%}
{%
  set status_classes = {
    'status': 'success',
    'error': 'danger',
    'warning': 'warning',
    'info': 'info',
  }
%}
{%
  set status_roles = {
    'status': 'status',
    'error': 'alert',
    'warning': 'alert',
    'info': 'status',
  }
%}
<div data-drupal-messages>
  <div class=\"messages__wrapper\">
  {% for type, messages in message_list %}
    {%
      set message_classes = [
        'alert',
        'alert-' ~ status_classes[type],
        'alert-dismissible',
      ]
    %}
    {# Reset the attribute classes and then add the message specific classes. #}
    <div{{ attributes.setAttribute('class', classes).addClass(message_classes).setAttribute('role', status_roles[type]).setAttribute('aria-label', status_headings[type]) }}>
      <button type=\"button\" role=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"{{ 'Close'|t }}\"><span aria-hidden=\"true\">&times;</span></button>
      {% if status_headings[type] %}
        <h2 class=\"sr-only\">{{ status_headings[type] }}</h2>
      {% endif %}
      {% if messages|length > 1 %}
        <ul class=\"item-list item-list--messages\">
          {% for message in messages %}
            <li class=\"item item--message\">{{ message }}</li>
          {% endfor %}
        </ul>
      {% else %}
        <p>{{ messages|first }}</p>
      {% endif %}
    </div>
  {% endfor %}
  </div>
</div>
", "themes/bootstrap/templates/system/status-messages.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\themes\\bootstrap\\templates\\system\\status-messages.html.twig");
    }
}
